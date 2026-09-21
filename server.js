import express from 'express';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import util from 'util';
import { fileURLToPath } from 'url';
import multer from 'multer';

const execPromise = util.promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Ensure audio dir exists
const audioDir = path.join(__dirname, 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, audioDir);
  },
  filename: (req, file, cb) => {
    // Clean original name (handle any double extensions or windows paths)
    let cleanName = path.basename(file.originalname);
    cleanName = cleanName.replace(/\\/g, '/').split('/').pop();
    cb(null, cleanName);
  }
});
const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from root
app.use(express.static(__dirname));

// Audio upload API endpoint
app.post('/api/upload-audio', upload.array('audioFiles', 30), async (req, res) => {
  const files = req.files || [];

  if (files.length === 0) {
    return res.status(400).json({ success: false, error: 'No files provided' });
  }

  const uploaded = [];

  for (const f of files) {
    let fileName = f.filename;
    let targetMp3 = fileName;

    // Check if filename ends with audio extension
    const extMatch = fileName.match(/\.(wav|m4a|aac|ogg|webm|mp3\.wav)$/i);
    if (extMatch) {
      targetMp3 = fileName.replace(/\.(wav|m4a|aac|ogg|webm|mp3\.wav)$/i, '.mp3');
      // If it didn't end with -en or -mr and was .mp3.wav
      targetMp3 = targetMp3.replace(/\.mp3$/, '.mp3');
      const targetPath = path.join(audioDir, targetMp3);

      try {
        await execPromise(`ffmpeg -y -i "${f.path}" -vn -ar 44100 -ac 1 -b:a 96k "${targetPath}"`);
        if (fs.existsSync(targetPath)) {
          // clean up original temporary wav/m4a if target is different
          if (f.path !== targetPath) {
            try { fs.unlinkSync(f.path); } catch (e) {}
          }
          const stats = fs.statSync(targetPath);
          uploaded.push({ original: f.filename, savedAs: targetMp3, size: stats.size });
          continue;
        }
      } catch (convErr) {
        console.error(`ffmpeg conversion failed for ${f.filename}:`, convErr);
      }
    }

    // Default: keep as is
    uploaded.push({ original: f.filename, savedAs: fileName, size: f.size });
  }

  return res.json({
    success: true,
    message: `Successfully processed ${files.length} audio file(s)`,
    files: uploaded
  });
});

// Endpoint to list existing audio files
app.get('/api/audio-list', (req, res) => {
  try {
    const files = fs.readdirSync(audioDir)
      .filter(f => f.endsWith('.mp3') || f.endsWith('.wav'))
      .map(f => {
        const stats = fs.statSync(path.join(audioDir, f));
        return { name: f, size: stats.size, modified: stats.mtime };
      });
    return res.json({ success: true, files });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// API Endpoint for visit inquiries
app.post('/api/inquiry', (req, res) => {
  const { name, email, purpose, message } = req.body;
  const destinationEmail = 'vijay.jay.jadhav@gmail.com';
  
  console.log(`[INQUIRY FOR ${destinationEmail}] Received from: ${name} (${email}), Purpose: ${purpose}, Message: ${message}`);

  return res.json({
    success: true,
    message: `Inquiry successfully submitted for ${destinationEmail}`,
    recipient: destinationEmail,
    details: { name, email, purpose, message }
  });
});

// Route handling for clean URLs or fallback
app.get('*', (req, res, next) => {
  // If file has an extension, let it 404 naturally
  if (req.path.includes('.') && !req.path.endsWith('.html')) {
    return next();
  }

  const cleanPath = req.path === '/' ? 'index.html' : `${req.path.replace(/^\//, '')}.html`;
  const filePath = path.join(__dirname, cleanPath);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

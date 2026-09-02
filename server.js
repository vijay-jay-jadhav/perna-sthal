import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from root
app.use(express.static(__dirname));

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

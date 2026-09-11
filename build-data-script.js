import fs from 'fs';
import { mahapurushList } from './mahapurush-data.js';

const content = `/**
 * Official Mahapurush Data of Prerna Sthal, Nakshatra Udyan, Baramati
 * Exact text from the official Prerna Sthal publication (both Marathi and English).
 */

window.mahapurushList = ${JSON.stringify(mahapurushList, null, 2)};
`;

fs.writeFileSync('mahapurush-list.data.js', content, 'utf8');
console.log('mahapurush-list.data.js written successfully!');

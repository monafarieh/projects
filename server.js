const http = require('http');
const fs = require('fs');
const path = require('path');
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8' };
const formulaeSource = 'C:\\Users\\mnafa\\.codex\\attachments\\f6387587-b7a1-4b2c-add2-ffda9291a8ff\\pasted-text.txt';
function readFormulae() {
  const seen = new Map();
  fs.readFileSync(formulaeSource, 'utf8').split(/\r?\n/).forEach(line => {
    const [formula, name = '', cas = ''] = line.split('\t').map(cell => cell.trim());
    if (!formula || formula === 'Chemical formula' || !/[A-Za-z]/.test(formula) || !name) return;
    if (!seen.has(formula)) seen.set(formula, { formula, name, cas });
  });
  return [...seen.values()].sort((a,b) => a.formula.localeCompare(b.formula));
}
http.createServer((req,res) => {
  if (req.url === '/api/chemical-formulae') {
    try { res.writeHead(200, {'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store'}); return res.end(JSON.stringify(readFormulae())); }
    catch { res.writeHead(500, {'Content-Type':'application/json; charset=utf-8'}); return res.end(JSON.stringify({ error:'Formula reference unavailable' })); }
  }
  const url = req.url === '/' ? '/index.html' : req.url;
  const file = path.join(__dirname, path.normalize(url));
  if (!file.startsWith(__dirname)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file, (err,data) => { if (err) { res.writeHead(404); return res.end('Not found'); } res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'}); res.end(data); });
}).listen(5173,'127.0.0.1',() => console.log('Chemical Bonds: http://127.0.0.1:5173'));

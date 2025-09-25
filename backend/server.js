const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { spawn } = require('child_process');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(express.json());

const TICKETS_FILE = path.join(__dirname, 'tickets.json');
const KNOW_FILE = path.join(__dirname, 'knowledge.json');

async function readJson(file, fallback = []) {
  try {
    const txt = await fs.readFile(file, 'utf8');
    return JSON.parse(txt || '[]');
  } catch (err) {
    return fallback;
  }
}
async function writeJson(file, obj) {
  await fs.writeFile(file, JSON.stringify(obj, null, 2), 'utf8');
}

/** Tickets endpoints **/
app.get('/tickets', async (req, res) => {
  const tickets = await readJson(TICKETS_FILE, []);
  res.json(tickets);
});

app.post('/tickets', async (req, res) => {
  const { issue, description, priority } = req.body;
  const tickets = await readJson(TICKETS_FILE, []);
  const id = Date.now().toString();
  const ticket = {
    id,
    issue,
    description,
    priority: priority || 'Medium',
    status: 'open',
    createdAt: new Date().toISOString()
  };
  tickets.unshift(ticket);
  await writeJson(TICKETS_FILE, tickets);
  res.status(201).json(ticket);
});

app.put('/tickets/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const tickets = await readJson(TICKETS_FILE, []);
  const idx = tickets.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Ticket not found' });
  tickets[idx] = { ...tickets[idx], ...updates, updatedAt: new Date().toISOString() };
  await writeJson(TICKETS_FILE, tickets);
  res.json(tickets[idx]);
});

/** Knowledge base **/
app.get('/knowledge', async (req, res) => {
  const kb = await readJson(KNOW_FILE, []);
  res.json(kb);
});

/** Onboarding automation: call Python script **/
app.post('/onboard', async (req, res) => {
  const { name } = req.body || {};
  // spawn python3; some systems may need 'python' instead
  const pythonPath = 'python3';
  const scriptPath = path.join(__dirname, 'scripts', 'onboard.py');
  const py = spawn(pythonPath, [scriptPath, name || 'New User']);

  let out = '';
  let errOut = '';
  py.stdout.on('data', chunk => { out += chunk.toString(); });
  py.stderr.on('data', chunk => { errOut += chunk.toString(); });

  py.on('close', (code) => {
    if (errOut) console.error('python stderr:', errOut);
    try {
      const result = JSON.parse(out);
      res.json(result);
    } catch (e) {
      res.status(500).json({ error: 'Failed to parse python output', raw: out, stderr: errOut });
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));

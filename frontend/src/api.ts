const API = 'http://localhost:4000';

export async function getTickets(): Promise<any[]> {
  const res = await fetch(`${API}/tickets`);
  return res.json();
}

export async function createTicket(payload: { issue: string; description: string; priority?: string }) {
  const res = await fetch(`${API}/tickets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function updateTicket(id: string, updates: Record<string, any>) {
  const res = await fetch(`${API}/tickets/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
  return res.json();
}

export async function getKnowledge() {
  const res = await fetch(`${API}/knowledge`);
  return res.json();
}

export async function onboard(name: string) {
  const res = await fetch(`${API}/onboard`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  return res.json();
}

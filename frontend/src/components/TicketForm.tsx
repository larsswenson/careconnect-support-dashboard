import React, { useState } from 'react';
import { createTicket } from '../api';

export default function TicketForm({ onTicketCreated }: { onTicketCreated: () => void }) {
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!issue) return alert('Please enter an issue');
    await createTicket({ issue, description, priority });
    setIssue('');
    setDescription('');
    setPriority('Medium');
    onTicketCreated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 12, background: '#f7f7f7', borderRadius: 6 }}>
      <div style={{ marginBottom: 8 }}>
        <input value={issue} onChange={e => setIssue(e.target.value)} placeholder="Issue" style={{ width: '50%', padding:6 }}/>
      </div>
      <div style={{ marginBottom: 8 }}>
        <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" style={{ width: '70%', padding:6 }}/>
      </div>
      <div style={{ marginBottom: 8 }}>
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option>Low</option><option>Medium</option><option>High</option>
        </select>
      </div>
      <button type="submit">Submit Ticket</button>
    </form>
  );
}

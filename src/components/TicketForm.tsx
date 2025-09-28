'use client';

import { useState } from 'react';
import { addTicket, Ticket } from '@/lib/tickets';

type TicketFormProps = {
  onTicketAdded?: (ticket: Ticket) => void; // <-- Add this
};

export default function TicketForm({ onTicketAdded }: TicketFormProps) {
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket: Ticket = { issue, description, status: 'open' };
    addTicket(newTicket);
    onTicketAdded?.(newTicket); // <-- notify parent if callback exists
    setIssue('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-2">
        <label className="block font-semibold">Issue:</label>
        <input
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Ticket
      </button>
    </form>
  );
}



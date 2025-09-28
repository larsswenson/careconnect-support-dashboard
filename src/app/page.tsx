'use client';

import { useState, useEffect } from 'react';
import TicketForm from '@/components/TicketForm';
import TicketList from '@/components/TicketList';
import OnboardButton from '@/components/OnboardButton';
import { getTickets, Ticket } from '@/lib/tickets';

export default function HomePage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  // Load tickets from localStorage when component mounts
  useEffect(() => {
    setTickets(getTickets());
  }, []);

  // Handle new ticket added
  const handleTicketAdded = (ticket: Ticket) => {
    setTickets((prev) => [...prev, ticket]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">CareConnect Support Dashboard</h1>

      {/* Ticket Submission Form */}
      <TicketForm onTicketAdded={handleTicketAdded} />

      {/* Ticket List */}
      <TicketList tickets={tickets} />

      {/* Onboarding Automation */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Automation Demo</h2>
        <OnboardButton />
      </div>
    </div>
  );
}




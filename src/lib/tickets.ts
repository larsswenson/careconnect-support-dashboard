'use client';

export type Ticket = {
  issue: string;
  description: string;
  status: string;
};

const TICKETS_KEY = 'tickets';

export function getTickets(): Ticket[] {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(TICKETS_KEY) || '[]');
}

export function addTicket(ticket: Ticket) {
  if (typeof window === 'undefined') return;
  const tickets = getTickets();
  tickets.push(ticket);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}


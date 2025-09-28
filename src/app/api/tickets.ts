import { getTickets, addTicket, Ticket } from '@/lib/tickets';

export function GET() {
  const tickets = getTickets();
  return new Response(JSON.stringify(tickets), { status: 200 });
}

export function POST(req: Request) {
  return req.json().then((ticket: Ticket) => {
    addTicket(ticket);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  });
}

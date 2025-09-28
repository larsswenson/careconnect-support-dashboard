import { Ticket } from '@/lib/tickets';

type TicketListProps = {
  tickets: Ticket[];
};

export default function TicketList({ tickets }: TicketListProps) {
  if (!tickets.length) return <p>No tickets yet.</p>;

  return (
    <ul className="space-y-2">
      {tickets.map((ticket, idx) => (
        <li key={idx} className="border p-2 rounded">
          <strong>{ticket.issue}</strong> - {ticket.description} ({ticket.status})
        </li>
      ))}
    </ul>
  );
}


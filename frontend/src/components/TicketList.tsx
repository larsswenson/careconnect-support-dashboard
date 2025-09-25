import React from 'react';
import { updateTicket } from '../api';

export default function TicketList({ tickets, refresh }: { tickets: any[]; refresh: () => void }) {
  const closeTicket = async (id: string) => {
    await updateTicket(id, { status: 'closed' });
    refresh();
  };

  return (
    <div style={{ marginTop: 12 }}>
      <h3>Open Tickets</h3>
      {tickets.length === 0 ? <div>No tickets</div> : null}
      {tickets.map(t => (
        <div key={t.id} style={{ border: '1px solid #ddd', borderRadius:6, padding:10, marginBottom:8 }}>
          <div style={{ display:'flex', justifyContent:'space-between' }}>
            <strong>{t.issue}</strong>
            <small>{t.priority}</small>
          </div>
          <div style={{ marginTop:6 }}>{t.description}</div>
          <div style={{ marginTop:6 }}>
            <em>Status: {t.status}</em>
            {t.status !== 'closed' && <button onClick={() => closeTicket(t.id)} style={{ marginLeft: 8 }}>Close</button>}
          </div>
        </div>
      ))}
    </div>
  );
}

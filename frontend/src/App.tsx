import React, { useEffect, useState } from 'react';
import './App.css';
import { getTickets, onboard } from './api';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import KnowledgeBase from './components/KnowledgeBase';

function App() {
  const [tickets, setTickets] = useState<any[]>([]);
  const fetchTickets = async () => setTickets(await getTickets());

  useEffect(() => { fetchTickets(); }, []);

  const runOnboard = async () => {
    const name = window.prompt('Enter name for onboarding demo', 'Jane Demo');
    if (!name) return;
    const res = await onboard(name);
    alert('Onboarding result:\n' + JSON.stringify(res, null, 2));
  };

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: '0 auto' }}>
      <h1>CareConnect — Support Dashboard (Demo)</h1>
      <div style={{ marginBottom: 12 }}>
        <button onClick={runOnboard}>Run Onboarding Automation (Python)</button>
      </div>
      <TicketForm onTicketCreated={fetchTickets} />
      <TicketList tickets={tickets} refresh={fetchTickets} />
      <KnowledgeBase />
    </div>
  );
}

export default App;


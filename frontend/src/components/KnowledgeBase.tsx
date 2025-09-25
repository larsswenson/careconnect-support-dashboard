import React, { useEffect, useState } from 'react';
import { getKnowledge } from '../api';

export default function KnowledgeBase() {
  const [kb, setKb] = useState<any[]>([]);
  useEffect(() => {
    (async () => setKb(await getKnowledge()))();
  }, []);
  return (
    <div style={{ marginTop: 12 }}>
      <h3>Knowledge Base</h3>
      {kb.map(item => (
        <div key={item.id} style={{ padding:8, borderBottom: '1px solid #eee' }}>
          <strong>{item.title}</strong>
          <div style={{ marginTop:4 }}>{item.content}</div>
        </div>
      ))}
    </div>
  );
}

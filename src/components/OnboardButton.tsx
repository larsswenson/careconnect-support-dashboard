'use client';

import { useState } from 'react';

export default function OnboardButton() {
  const [result, setResult] = useState<any>(null);

  const handleClick = async () => {
    const response = await fetch('/api/onboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John Doe' })
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="my-4">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleClick}
      >
        Run Onboarding Automation
      </button>
      {result && (
        <pre className="mt-2 p-2 bg-gray-100 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

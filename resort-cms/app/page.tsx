'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [resorts, setResorts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResorts = async () => {
      try {
        const response = await fetch('/api/resorts');
        const data = await response.json();
        setResorts(data.data || []);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResorts();
  }, []);

  return (
    <main style={{ padding: '40px' }}>
      <h1>🏝️ Resort CMS</h1>
      <p>Multi-tenant resort booking platform</p>

      <div style={{ marginTop: '40px' }}>
        <h2>Available Resorts</h2>
        {loading ? (
          <p>Loading resorts...</p>
        ) : resorts.length === 0 ? (
          <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
            <p>No resorts added yet.</p>
            <p>To add resorts:</p>
            <ol>
              <li>Go to Supabase Dashboard</li>
              <li>Click "SQL Editor"</li>
              <li>Paste this:
                <code style={{ display: 'block', backgroundColor: '#fff', padding: '10px', marginTop: '10px' }}>
{`INSERT INTO resorts (name, description) VALUES
('Siyam World', 'Luxury resort in Maldives'),
('Conrad Maldives', 'Premium resort');`}
                </code>
              </li>
              <li>Click "Run"</li>
              <li>Refresh this page</li>
            </ol>
          </div>
        ) : (
          <ul style={{ fontSize: '18px' }}>
            {resorts.map((resort: any) => (
              <li key={resort.id} style={{ marginBottom: '10px' }}>
                <strong>{resort.name || resort.id}</strong>
                {resort.description && <p>{resort.description}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        <h3>Admin Access</h3>
        <p>
          <a href="/admin" style={{ color: '#0066cc' }}>
            Go to Admin Dashboard →
          </a>
        </p>
      </div>
    </main>
  );
}
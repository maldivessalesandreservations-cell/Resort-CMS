'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
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
    <div style={{ padding: '40px' }}>
      <h1>Admin Dashboard</h1>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Resorts ({resorts.length})</h2>
        {loading ? (
          <p>Loading...</p>
        ) : resorts.length === 0 ? (
          <p>No resorts yet. Add one from Supabase Dashboard.</p>
        ) : (
          <ul>
            {resorts.map((resort: any) => (
              <li key={resort.id}>
                {resort.name || resort.id}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/admin/resorts">Manage Resorts</a></li>
          <li><a href="/admin/villas">Manage Villas</a></li>
          <li><a href="/">Back to Public Site</a></li>
        </ul>
      </div>
    </div>
  );
}
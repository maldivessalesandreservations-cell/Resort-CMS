export default function Home() {
  return (
    <main style={{ 
      padding: '40px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🎉 Resort CMS</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        Your app is working!
      </p>
      <div style={{ marginTop: '30px' }}>
        <p>✅ Connected to Supabase</p>
        <p>✅ Deployed to Vercel</p>
        <p>✅ Running in Codespaces</p>
      </div>
      <p style={{ marginTop: '40px', color: '#666' }}>
        Next step: Add admin dashboard & public websites
      </p>
    </main>
  );
}
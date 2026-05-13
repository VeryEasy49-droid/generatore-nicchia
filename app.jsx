export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#111827",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      fontFamily: "Arial"
    }}>
      
      <div style={{
        background: "#1f2937",
        padding: "30px",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "700px",
        boxShadow: "0 0 30px rgba(0,0,0,0.4)"
      }}>
        
        <h1 style={{
          fontSize: "38px",
          marginBottom: "10px",
          textAlign: "center"
        }}>
          🚀 Generatore Nicchia AI
        </h1>

        <p style={{
          textAlign: "center",
          opacity: 0.8,
          marginBottom: "30px"
        }}>
          Trova idee profittevoli per TikTok, Instagram e prodotti digitali
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>

          <input
            placeholder="I tuoi interessi..."
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px"
            }}
          />

          <button style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            background: "#8b5cf6",
            color: "white",
            fontSize: "18px",
            cursor: "pointer"
          }}>
            Genera Nicchia
          </button>

          <div style={{
            marginTop: "20px",
            background: "#374151",
            padding: "20px",
            borderRadius: "15px"
          }}>
            <h2>💡 Idea TikTok</h2>
            <p>Account motivazionale con frasi forti e storytelling.</p>

            <h2>📘 Prodotto Digitale</h2>
            <p>Mini guida PDF: “Come crescere da 0 a 1000 follower”.</p>

            <h2>💰 Monetizzazione</h2>
            <p>Vendita ebook + affiliazioni + Gumroad.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

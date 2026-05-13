export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f3f4f6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "600px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        
        <h1 style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}>
          Generatore Nicchia Profittevole 🚀
        </h1>

        <p style={{
          color: "#555",
          marginBottom: "30px"
        }}>
          Scopri una nicchia profittevole in base ai tuoi interessi.
        </p>

        <div style={{
          background: "#f9fafb",
          padding: "20px",
          borderRadius: "15px"
        }}>
          <h2 style={{
            fontSize: "24px",
            marginBottom: "15px"
          }}>
            Risultato 🔥
          </h2>

          <p><strong>Nicchia:</strong> Crescita TikTok</p>
          <p><strong>Prodotto:</strong> Guida 1000 follower</p>
          <p><strong>Idea TikTok:</strong> “Perché resti bloccato a 200 views?”</p>
        </div>

      </div>
    </div>
  );
}

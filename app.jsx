export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #050505 0%, #111111 40%, #1a1a1a 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        display: "flex",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: "90px",
          background: "rgba(255,255,255,0.04)",
          borderRight: "1px solid rgba(255,215,0,0.15)",
          padding: "20px 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          boxShadow: "0 0 30px rgba(255,215,0,0.08)",
        }}
      >
        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "18px",
            background: "linear-gradient(135deg,#ff4fd8,#ffd700)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            boxShadow: "0 0 20px rgba(255,0,180,0.5)",
          }}
        >
          🚀
        </div>

        {["🏠", "📊", "🔥", "💡", "⚙️"].map((icon, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0 0 12px rgba(255,215,0,0.1)",
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, padding: "30px" }}>
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "42px",
                background:
                  "linear-gradient(90deg,#ffd700,#ff4fd8,#00ff99)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Generatore Nicchie
            </h1>

            <p style={{ color: "#aaa", marginTop: "8px" }}>
              Dashboard AI Premium
            </p>
          </div>

          <button
            style={{
              background: "linear-gradient(135deg,#ff4fd8,#ffd700)",
              border: "none",
              padding: "14px 24px",
              borderRadius: "14px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 25px rgba(255,0,180,0.4)",
            }}
          >
            + Nuova Ricerca
          </button>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "22px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: "25px",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,215,0,0.15)",
              boxShadow: "0 0 25px rgba(255,215,0,0.08)",
            }}
          >
            <h3 style={{ color: "#ffd700" }}>🔥 Trend Principale</h3>

            <div
              style={{
                marginTop: "25px",
                height: "180px",
                borderRadius: "18px",
                background:
                  "linear-gradient(180deg,#ff4fd8,#111111)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              AI Tools
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: "25px",
              border: "1px solid rgba(255,215,0,0.15)",
            }}
          >
            <h3 style={{ color: "#00ff99" }}>📈 Crescita</h3>

            <div
              style={{
                display: "flex",
                alignItems: "end",
                gap: "12px",
                marginTop: "40px",
                height: "160px",
              }}
            >
              {[40, 70, 90, 60, 120].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}px`,
                    borderRadius: "12px",
                    background:
                      "linear-gradient(180deg,#00ff99,#ffd700)",
                    boxShadow: "0 0 15px rgba(0,255,153,0.3)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: "25px",
              border: "1px solid rgba(255,215,0,0.15)",
            }}
          >
            <h3 style={{ color: "#ff4fd8" }}>💎 Nicchia Top</h3>

            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <h2 style={{ margin: 0 }}>Prodotti Digitali AI</h2>

              <p style={{ color: "#aaa", marginTop: "10px" }}>
                Alto potenziale • Bassa concorrenza
              </p>

              <button
                style={{
                  marginTop: "20px",
                  width: "100%",
                  padding: "14px",
                  borderRadius: "14px",
                  border: "none",
                  background:
                    "linear-gradient(135deg,#ffd700,#ff4fd8)",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Analizza
              </button>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: "25px",
              border: "1px solid rgba(255,215,0,0.15)",
            }}
          >
            <h3 style={{ color: "#ffd700" }}>⚡ Performance</h3>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  border: "12px solid #222",
                  borderTop: "12px solid #ffd700",
                  borderRight: "12px solid #ff4fd8",
                  boxShadow: "0 0 25px rgba(255,215,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                92%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

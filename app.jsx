import React from "react";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #050505 0%, #111111 40%, #1b0f14 100%)",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "58px",
              marginBottom: "15px",
              background:
                "linear-gradient(90deg, #ffd700, #ff4fd8, #c0c0c0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              textShadow: "0 0 25px rgba(255,215,0,0.25)",
            }}
          >
            Generatore Nicchia
          </h1>

          <p
            style={{
              color: "#cccccc",
              fontSize: "20px",
            }}
          >
            Trova la tua nicchia perfetta e crea un business digitale WOW 🚀
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,215,0,0.2)",
              borderRadius: "25px",
              padding: "30px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 25px rgba(255,215,0,0.15)",
            }}
          >
            <h2
              style={{
                color: "#ffd700",
                marginBottom: "20px",
              }}
            >
              🔥 Le Tue Passioni
            </h2>

            <input
              placeholder="Scrivi le tue passioni..."
              style={inputStyle}
            />

            <input
              placeholder="Cosa ami fare?"
              style={inputStyle}
            />

            <button style={buttonStyle}>
              Analizza
            </button>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,79,216,0.25)",
              borderRadius: "25px",
              padding: "30px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 25px rgba(255,79,216,0.15)",
            }}
          >
            <h2
              style={{
                color: "#ff4fd8",
                marginBottom: "20px",
              }}
            >
              💎 Nicchia Perfetta
            </h2>

            <div
              style={{
                background: "#121212",
                borderRadius: "18px",
                padding: "25px",
                marginTop: "20px",
              }}
            >
              <h3
                style={{
                  color: "#ffd700",
                  marginBottom: "10px",
                }}
              >
                Business Digitale AI
              </h3>

              <p
                style={{
                  color: "#cccccc",
                  lineHeight: "1.6",
                }}
              >
                Alta richiesta, forte crescita e perfetta per TikTok,
                Instagram e prodotti digitali.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(192,192,192,0.25)",
              borderRadius: "25px",
              padding: "30px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 25px rgba(192,192,192,0.15)",
            }}
          >
            <h2
              style={{
                color: "#c0c0c0",
                marginBottom: "20px",
              }}
            >
              🚀 Potenziale Guadagno
            </h2>

            <div
              style={{
                height: "14px",
                background: "#222",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "85%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg,#ffd700,#ff4fd8)",
                }}
              ></div>
            </div>

            <h1
              style={{
                fontSize: "52px",
                margin: "0",
                color: "#ffffff",
              }}
            >
              85%
            </h1>

            <p
              style={{
                color: "#bbbbbb",
                marginTop: "10px",
              }}
            >
              Possibilità di successo stimata
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "#111",
  color: "white",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "14px",
  border: "none",
  background: "linear-gradient(90deg,#ffd700,#ff4fd8)",
  color: "black",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};

import React from "react";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "600px",
          color: "white",
          boxShadow: "0 0 30px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          🚀 Generatore Nicchia AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          Trova idee profittevoli per TikTok, Etsy e prodotti digitali
        </p>

        <input
          type="text"
          placeholder="Scrivi un argomento..."
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            marginBottom: "20px",
            fontSize: "16px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            background: "#8b5cf6",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Genera Nicchia
        </button>
      </div>
    </div>
  );
}

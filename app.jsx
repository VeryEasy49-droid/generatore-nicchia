export default function GeneratoreNicchia() {
  const dati = {
    Fitness: {
      nicchia: "Fitness da casa per principianti",
      prodotto: "Guida allenamento + alimentazione base",
      video: "3 errori che ti bloccano nel dimagrimento"
    },
    TikTok: {
      nicchia: "Crescita TikTok da zero",
      prodotto: "Guida 1000 follower + script pronti",
      video: "Perché resti bloccato a 200 views?"
    },
    AI: {
      nicchia: "AI semplice per creator",
      prodotto: "Guida ChatGPT pratica",
      video: "3 modi per usare AI e guadagnare tempo"
    },
    Ricette: {
      nicchia: "Ricette sane veloci",
      prodotto: "Ebook ricette fit",
      video: "Cena sana pronta in 5 minuti"
    },
    Motivazione: {
      nicchia: "Mindset e disciplina",
      prodotto: "Planner produttività",
      video: "La verità sulla motivazione"
    }
  };

  const categorie = Object.keys(dati);

  const [categoria, setCategoria] = React.useState("");
  const [risultato, setRisultato] = React.useState(null);

  const genera = () => {
    if (!categoria) return;
    setRisultato(dati[categoria]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center p-6 text-white">
      <div className="w-full max-w-2xl bg-white text-black rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">
            Generatore Nicchia Profittevole 🚀
          </h1>

          <p className="text-gray-600 text-lg">
            Scopri una nicchia profittevole, un prodotto digitale e un’idea TikTok.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 mb-6">
          <label className="font-semibold block mb-3 text-lg">
            Scegli una categoria
          </label>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full p-4 rounded-xl border text-lg"
          >
            <option value="">Seleziona...</option>

            {categorie.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <button
            onClick={genera}
            className="w-full mt-5 bg-black text-white rounded-xl p-4 text-lg font-semibold hover:opacity-90 transition"
          >
            Genera Idea
          </button>
        </div>

        {risultato && (
          <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 shadow-xl animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold mb-6">
              Risultato 🔥
            </h2>

            <div className="space-y-5 text-lg">
              <div>
                <p className="font-bold text-gray-300 mb-1">NICCHIA</p>
                <p>{risultato.nicchia}</p>
              </div>

              <div>
                <p className="font-bold text-gray-300 mb-1">PRODOTTO DIGITALE</p>
                <p>{risultato.prodotto}</p>
              </div>

              <div>
                <p className="font-bold text-gray-300 mb-1">IDEA VIDEO TIKTOK</p>
                <p>{risultato.video}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8 text-gray-500 text-sm">
          Powered by VeryEasy49 ✨
        </div>
      </div>
    </div>
  );
}

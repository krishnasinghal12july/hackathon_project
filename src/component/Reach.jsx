import React, { useEffect, useState } from "react";

export default function Impact() {
  // 📌 STATIC DATA (2021–2025 FIXED)
  const staticData = [
    { year: "2021", reach: 1200 },
    { year: "2022", reach: 3400 },
    { year: "2023", reach: 7800 },
    { year: "2024", reach: 15000 },
    { year: "2025", reach: 26000 },
  ];

  // 🔥 LIVE 2026 DATA (ONLY THIS CHANGES)
  const [live2026, setLive2026] = useState({
    year: "2026",
    reach: 30000,
  });

  const [testimonials, setTestimonials] = useState([]);

  const messages = [
    "This platform helped deliver emergency food supply instantly.",
    "Volunteer coordination is extremely smooth and fast.",
    "Medical camps were organized efficiently through this system.",
    "Transparency in task handling is excellent.",
    "Real-time updates improved disaster response speed.",
  ];

  // 🔥 LIVE FEEDBACK (UNCHANGED)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      setTestimonials((prev) => [
        { id: Date.now(), text: randomMessage },
        ...prev,
      ].slice(0, 6));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 ONLY 2026 INCREASING
  useEffect(() => {
    const interval = setInterval(() => {
      setLive2026((prev) => ({
        ...prev,
        reach: prev.reach + Math.floor(Math.random() * 300),
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 📊 FINAL DATA (STATIC + LIVE 2026)
  const data = [...staticData, live2026];

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">
          Our Impact & Reach
        </h1>
        <p className="text-slate-500 text-sm">
          Tracking real-time community engagement growth
        </p>
      </div>

      {/* ================= GROWTH SECTION ================= */}
      <div className="bg-white border rounded-xl p-5">

        <h2 className="font-semibold mb-4">Yearly Reach Growth (Live)</h2>

        <div className="space-y-4">

          {data.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm">
                <span>
                  {item.year}
                  {item.year === "2026" && (
                    <span className="text-indigo-600 ml-2">(Live)</span>
                  )}
                </span>
                <span>{item.reach.toLocaleString()}</span>
              </div>

              <div className="w-full bg-slate-200 h-3 rounded-full mt-1">
                <div
                  className="h-3 bg-indigo-600 rounded-full transition-all duration-500"
                  style={{
                    width: `${(item.reach / 40000) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= LOWER SECTION ================= */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {/* LIVE FEEDBACK */}
        <div className="bg-white border rounded-xl p-5">
          <h2 className="font-semibold mb-3">Live Community Feedback</h2>

          <div className="space-y-2">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-2 border rounded-lg text-sm text-slate-600"
              >
                ⭐ {t.text}
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS + FUTURE */}
        <div className="bg-white border rounded-xl p-5">

          <h2 className="font-semibold mb-3">Key Achievements</h2>

          <ul className="space-y-2 text-sm text-slate-600">
            <li>✔ 25,000+ people reached</li>
            <li>✔ 1,200+ active volunteers</li>
            <li>✔ 500+ community tasks completed</li>
            <li>✔ 50+ partner NGOs onboarded</li>
          </ul>

          {/* FUTURE ASPIRATION */}
          <div className="mt-5 p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-semibold text-indigo-700">
              Future Vision
            </h3>

            <p className="text-sm text-indigo-600 mt-1">
              “Empowering every citizen, connecting every volunteer, and building a stronger India through technology-driven social impact.”
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
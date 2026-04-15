import React, { useEffect, useState } from "react";

export default function Matching() {
  const [matches, setMatches] = useState([]);

  // Initial data
  useEffect(() => {
    setMatches([
      {
        volunteer: "Amit Sharma",
        skill: "Medical Support",
        task: "Medical Camp - Delhi",
        score: 92,
      },
      {
        volunteer: "Sara Khan",
        skill: "Teaching",
        task: "Education Program - Noida",
        score: 87,
      },
      {
        volunteer: "Rahul Verma",
        skill: "Logistics",
        task: "Food Distribution - Gurgaon",
        score: 78,
      },
    ]);
  }, []);

  // 🔥 Dynamic updates (simulate AI matching engine)
  useEffect(() => {
    const interval = setInterval(() => {
      setMatches((prev) => [
        ...prev,
        {
          volunteer: "New Volunteer",
          skill: ["Medical", "Teaching", "Logistics"][Math.floor(Math.random() * 3)],
          task: "Auto Assigned Task",
          score: Math.floor(Math.random() * 40 + 60),
        },
      ]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">
          Volunteer-Task Matching
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          AI-powered matching between volunteers and community needs
        </p>
      </div>

      {/* MATCH GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {matches.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >

            <h3 className="font-semibold text-slate-800">
              {item.volunteer}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Skill: {item.skill}
            </p>

            <p className="text-sm text-slate-500">
              Task: {item.task}
            </p>

            {/* MATCH SCORE */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Match Score</span>
                <span>{item.score}%</span>
              </div>

              <div className="w-full bg-slate-200 h-2 rounded-full mt-1">
                <div
                  className="h-2 bg-indigo-600 rounded-full"
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
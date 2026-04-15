import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    volunteers: 1200,
    tasks: 80,
    critical: 14,
    completed: 340,
  });

  const [feed, setFeed] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const [cities, setCities] = useState([
    { name: "Delhi", value: 120 },
    { name: "Mumbai", value: 98 },
    { name: "Bangalore", value: 76 },
    { name: "Chennai", value: 54 },
  ]);

  // 🧠 SMART AI INSIGHT STATE
  const [insight, setInsight] = useState({
    title: "AI Insight",
    text: "Analyzing system data...",
  });

  const actions = [
    { label: "Create Task", path: "/create-task" },
    { label: "Matching AI", path: "/matching" },
    { label: "Help Desk", path: "/helpdesk" },
  ];

  // ================= LIVE ENGINE =================
  useEffect(() => {
    const interval = setInterval(() => {

      // 🔥 STATS UPDATE
      setStats((prev) => ({
        volunteers: prev.volunteers + Math.floor(Math.random() * 4 - 1),
        tasks: prev.tasks + Math.floor(Math.random() * 3),
        critical: Math.max(5, prev.critical + (Math.random() > 0.5 ? 1 : -1)),
        completed: prev.completed + Math.floor(Math.random() * 4),
      }));

      // 🔥 CITIES UPDATE
      setCities((prev) =>
        prev.map((c) => ({
          ...c,
          value: Math.max(20, c.value + Math.floor(Math.random() * 10 - 4)),
        }))
      );

      // 🔥 LIVE FEED
      const events = [
        "Volunteer joined Food Drive",
        "Task assigned to Mumbai zone",
        "Critical alert in Delhi",
        "Medical camp activated in Bangalore",
        "New donation request received",
      ];

      setFeed((prev) =>
        [events[Math.floor(Math.random() * events.length)], ...prev].slice(0, 6)
      );

      // 🔥 ALERTS
      if (Math.random() > 0.7) {
        const alertPool = [
          "⚠ High demand in Medical Zone",
          "⚠ Volunteer shortage in Delhi",
          "⚠ Emergency response required in Mumbai",
        ];

        setAlerts((prev) =>
          [alertPool[Math.floor(Math.random() * alertPool.length)], ...prev].slice(0, 4)
        );
      }

      // 🧠 SMART AI INSIGHT ENGINE (NEW)
      setInsight((prev) => {
        const { volunteers, tasks, critical } = stats;

        const insights = [
          {
            title: "System Optimization",
            text: "Balancing task distribution across all active zones.",
          },
          {
            title: "Volunteer Network Health",
            text:
              volunteers < 1100
                ? "Volunteer count dropping. Recommend recruitment drive."
                : "Volunteer network is stable and growing.",
          },
          {
            title: "Task Load Analysis",
            text:
              tasks > 100
                ? "High task load detected. Auto-scaling resources recommended."
                : "Task load is within optimal range.",
          },
          {
            title: "Critical Alert Status",
            text:
              critical > 15
                ? "Critical cases rising. Immediate intervention needed."
                : "Critical levels under control.",
          },
        ];

        return insights[Math.floor(Math.random() * insights.length)];
      });

    }, 2500);

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">
        SevaSync AI Dashboard
      </h1>

      {/* TOP STATS */}
      <div className="grid md:grid-cols-4 gap-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="bg-white p-5 rounded-xl border shadow-sm">
            <p className="text-sm text-slate-500 capitalize">{key}</p>
            <h2 className="text-2xl font-bold">{value}</h2>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-6 mt-6">

        {/* 🧠 SMART AI INSIGHT */}
        <div className="bg-white p-5 border rounded-xl">
          <h2 className="font-semibold mb-2">{insight.title}</h2>
          <p className="text-sm text-slate-600">{insight.text}</p>
        </div>

        {/* LIVE FEED */}
        <div className="bg-white p-5 border rounded-xl">
          <h2 className="font-semibold mb-2">Live Activity Feed</h2>

          <div className="space-y-2 text-sm text-slate-600">
            {feed.map((f, i) => (
              <p key={i}>⚡ {f}</p>
            ))}
          </div>
        </div>

        {/* ALERTS */}
        <div className="bg-white p-5 border rounded-xl">
          <h2 className="font-semibold mb-2">Alerts</h2>

          {alerts.length === 0 ? (
            <p className="text-sm text-slate-500">No active alerts</p>
          ) : (
            alerts.map((a, i) => (
              <p key={i} className="text-sm text-red-500">
                {a}
              </p>
            ))
          )}
        </div>

      </div>

      {/* SECOND GRID */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">

        {/* TOP CITIES */}
        <div className="bg-white p-5 border rounded-xl">
          <h2 className="font-semibold mb-3">Top Active Cities</h2>

          {cities.map((c, i) => (
            <div key={i} className="flex justify-between text-sm py-1">
              <span>{c.name}</span>
              <span className="font-medium">{c.value} tasks</span>
            </div>
          ))}
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white p-5 border rounded-xl">
          <h2 className="font-semibold mb-3">Quick Actions</h2>

          <div className="flex flex-col gap-2">
            {actions.map((a, i) => (
              <button
                key={i}
                onClick={() => navigate(a.path)}
                className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg text-sm hover:bg-indigo-100"
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
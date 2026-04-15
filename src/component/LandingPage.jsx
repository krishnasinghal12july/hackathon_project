import React, { useEffect, useState } from "react";
import { Users, ClipboardList, AlertTriangle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const [stats, setStats] = useState({
    volunteers: 1200,
    tasks: 56,
    critical: 12,
    completed: 320,
  });



  // Live stats simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        volunteers: prev.volunteers + Math.floor(Math.random() * 3),
        tasks: prev.tasks + Math.floor(Math.random() * 2),
        critical: Math.max(5, prev.critical + (Math.random() > 0.5 ? 1 : -1)),
        completed: prev.completed + Math.floor(Math.random() * 2),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      label: "Volunteers",
      value: stats.volunteers,
      icon: Users,
    },
    {
      label: "Active Tasks",
      value: stats.tasks,
      icon: ClipboardList,
    },
    {
      label: "Critical Areas",
      value: stats.critical,
      icon: AlertTriangle,
    },
    {
      label: "Completed Tasks",
      value: stats.completed,
      icon: CheckCircle,
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-slate-200">
        <h1 className="text-xl font-semibold text-indigo-600">
          SevaSync
        </h1>

        <div className="flex gap-4 text-sm">
          <button onClick={() => navigate("/login")} className="text-slate-600 hover:text-slate-900">
            Login
          </button>
          <button  onClick={() => navigate("/register")} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Connecting Volunteers to Real-World Impact
        </h1>

        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
          A smart system that collects community data, identifies urgent needs,
          and connects volunteers to where they matter most.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button  onClick={() => navigate("/register")} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>

          <button onClick={() => navigate("/impact")} className="border border-slate-300 px-6 py-2 rounded-lg hover:bg-slate-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {cards.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                <Icon className="text-indigo-600 w-5 h-5" />

                <p className="text-sm text-slate-500 mt-3">
                  {item.label}
                </p>

                <h2 className="text-2xl font-semibold mt-1">
                  {item.value}
                </h2>
              </div>
            );
          })}

        </div>
      </div>

      {/* PROBLEM */}
      <div className="bg-white py-14 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="text-slate-500 mt-3">
            NGO data is scattered across paper surveys and field reports,
            making it hard to identify urgent needs in real time.
          </p>
        </div>
      </div>

      {/* SOLUTION */}
      <div className="bg-slate-50 py-14">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-semibold">Our Solution</h2>
          <p className="text-slate-500 mt-3">
            A centralized platform that converts scattered data into actionable
            insights and intelligently matches volunteers to tasks.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-indigo-600 text-white py-14 text-center">
        <h2 className="text-2xl font-semibold">
          Start Making Real Impact Today
        </h2>

        <p className="text-indigo-100 mt-2">
          Join the movement of smarter volunteer coordination.
        </p>

        <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition">
          Go to Dashboard
        </button>
      </div>

    </div>
  );
}
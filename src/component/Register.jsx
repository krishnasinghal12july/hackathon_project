import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    if (role === "ngo") {
      navigate("/ngo-dashboard");
    } else {
      navigate("/volunteer-setup");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">

      <div className="bg-white p-8 border rounded-xl w-[400px] text-center">

        <h1 className="text-2xl font-bold text-indigo-600 mb-2">
          Create Your Account
        </h1>

        <p className="text-sm text-slate-500 mb-6">
          Choose your role to continue
        </p>

        <div className="space-y-4">

          {/* NGO */}
          <button
            onClick={() => handleSelect("ngo")}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            I am part of an NGO
          </button>

          {/* VOLUNTEER */}
          <button
            onClick={() => handleSelect("volunteer")}
            className="w-full bg-slate-100 text-slate-800 py-3 rounded-lg hover:bg-slate-200"
          >
            I want to Volunteer
          </button>

        </div>

      </div>

    </div>
  );
}
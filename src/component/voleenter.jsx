import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VolunteerSetup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    skills: "",
    location: "",
    availability: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // later you can send to backend
    console.log("Volunteer Data:", form);

    // redirect after setup
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">

      <div className="bg-white p-8 border rounded-xl w-[450px]">

        <h1 className="text-2xl font-bold text-indigo-600 mb-2">
          Volunteer Setup
        </h1>

        <p className="text-sm text-slate-500 mb-6">
          Complete your profile to get assigned tasks
        </p>

        <div className="space-y-4">

          {/* NAME */}
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {/* SKILLS */}
          <select
            name="skills"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Skill</option>
            <option value="Medical">Medical</option>
            <option value="Teaching">Teaching</option>
            <option value="Logistics">Logistics</option>
            <option value="Cleaning">Cleaning</option>
          </select>

          {/* LOCATION */}
          <input
            name="location"
            placeholder="Preferred Location"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {/* AVAILABILITY */}
          <select
            name="availability"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Availability</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            <option value="Full Day">Full Day</option>
          </select>

          {/* SUBMIT */}
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Complete Setup
          </button>

        </div>

      </div>

    </div>
  );
}
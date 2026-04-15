import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    location: "",
    priority: "Medium",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // simulate API call
    setTimeout(() => {
      console.log("Task Created:", form);
      setLoading(false);

      alert("Task Created Successfully!");

      // 👉 redirect to dashboard after creation
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white border rounded-2xl p-6 shadow-sm">

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-slate-800">
          Create New Task
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Add a community task for volunteers
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="text"
            name="title"
            placeholder="Task Title (e.g. Food Distribution)"
            value={form.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location (e.g. Delhi)"
            value={form.location}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>

          <textarea
            name="description"
            placeholder="Task Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg h-28 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {loading ? "Creating..." : "Create Task"}
          </button>

        </form>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 text-sm text-slate-500 hover:text-slate-800"
        >
          ← Back to Dashboard
        </button>

      </div>
    </div>
  );
}
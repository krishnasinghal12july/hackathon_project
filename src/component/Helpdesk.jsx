import React, { useEffect, useState } from "react";

export default function HelpDesk() {
  const [complaints, setComplaints] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    type: "Activity",
    target: "",
    message: "",
  });

  const [reviewText, setReviewText] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 SUBMIT COMPLAINT WITH SUCCESS STATE
  const submitComplaint = (e) => {
    e.preventDefault();

    const newComplaint = {
      id: Date.now(),
      type: form.type,
      target: form.target,
      message: form.message,
    };

    setComplaints([newComplaint, ...complaints]);
    setSubmitted(true);

    setForm({
      type: "Activity",
      target: "",
      message: "",
    });

    // hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  // ⭐ REVIEW SYSTEM
  const submitReview = () => {
    if (!reviewText) return;

    const newReview = {
      id: Date.now(),
      text: reviewText,
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
  };

  // 🔥 MULTIPLE LIVE COMPLAINT TYPES
  useEffect(() => {
    const sampleComplaints = [
      {
        type: "Activity",
        target: "Food Distribution Drive",
        message: "Delay in response time",
      },
      {
        type: "Worker",
        target: "Volunteer - Amit Sharma",
        message: "Not available on time",
      },
      {
        type: "Company",
        target: "NGO Partner - Hope Foundation",
        message: "Coordination issue in scheduling",
      },
      {
        type: "Activity",
        target: "Medical Camp Assistance",
        message: "Insufficient resources available",
      },
      {
        type: "Worker",
        target: "Volunteer - Sara Khan",
        message: "Skill mismatch issue",
      },
    ];

    const interval = setInterval(() => {
      const random =
        sampleComplaints[
          Math.floor(Math.random() * sampleComplaints.length)
        ];

      setComplaints((prev) => [
        { id: Date.now(), ...random },
        ...prev,
      ].slice(0, 8));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Help Desk</h1>
        <p className="text-slate-500 text-sm">
          Raise complaints or give feedback about system usage
        </p>
      </div>

      {/* SUCCESS MESSAGE */}
      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          ✅ Complaint submitted successfully. It will be resolved soon.
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* ================= COMPLAINT FORM ================= */}
        <div className="bg-white border rounded-xl p-5">

          <h2 className="font-semibold mb-4">Raise a Complaint</h2>

          <form onSubmit={submitComplaint} className="space-y-3">

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            >
              <option>Activity</option>
              <option>Company</option>
              <option>Worker</option>
            </select>

            <input
              name="target"
              value={form.target}
              onChange={handleChange}
              placeholder="Target (Task / Worker / NGO)"
              className="w-full border p-2 rounded-lg"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe issue"
              className="w-full border p-2 rounded-lg h-24"
              required
            />

            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
              Submit Complaint
            </button>

          </form>

        </div>

        {/* ================= REVIEW BOX ================= */}
        <div className="bg-white border rounded-xl p-5">

          <h2 className="font-semibold mb-4">Feedback</h2>

          <div className="flex gap-2">
            <input
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write review..."
              className="w-full border p-2 rounded-lg"
            />

            <button
              onClick={submitReview}
              className="bg-green-600 text-white px-4 rounded-lg"
            >
              Send
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="p-2 border rounded-lg text-sm"
              >
                ⭐ {r.text}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= LIVE COMPLAINTS ================= */}
      <div className="mt-6 bg-white border rounded-xl p-5">

        <h2 className="font-semibold mb-3">Live Complaints Feed</h2>

        <div className="space-y-3">

          {complaints.map((c) => (
            <div
              key={c.id}
              className="p-3 border rounded-lg"
            >
              <div className="text-sm font-medium">
                {c.type}: {c.target}
              </div>
              <div className="text-sm text-slate-500">
                {c.message}
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
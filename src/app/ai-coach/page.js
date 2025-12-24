"use client";

import { useState } from "react";

export default function AICoach() {
  const [goal, setGoal] = useState("");
  const [days, setDays] = useState("");
  const [response, setResponse] = useState("");

  const getPlan = () => {
    if (goal === "muscle" && days === "5") {
      setResponse(`
5-Day Muscle Gain Plan (amanblifts style)

Day 1: Chest + Triceps
Day 2: Back + Biceps
Day 3: Legs
Day 4: Shoulders
Day 5: Arms + Abs

Focus on form, progressive overload, and recovery.
`);
    } else if (goal === "fatloss" && days === "5") {
      setResponse(`
5-Day Fat Loss Plan (amanblifts style)

Day 1: Full Body
Day 2: Cardio + Abs
Day 3: Upper Body
Day 4: Lower Body
Day 5: HIIT + Core

Keep rest short and intensity high.
`);
    } else {
      setResponse("Select a valid goal and number of days to get your plan.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 max-w-3xl mx-auto">
      
      <h1 className="text-4xl font-bold mb-6 text-center">
        AmanBlifts AI Coach
      </h1>

      <p className="text-gray-400 text-center mb-8">
        Get free workout guidance based on your goal.
      </p>

      <div className="space-y-4">
        <select
          className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="">Select Goal</option>
          <option value="muscle">Muscle Gain</option>
          <option value="fatloss">Fat Loss</option>
        </select>

        <select
          className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        >
          <option value="">Workout Days / Week</option>
          <option value="3">3 Days</option>
          <option value="4">4 Days</option>
          <option value="5">5 Days</option>
        </select>

        <button
          onClick={getPlan}
          className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Get My Plan
        </button>
      </div>

      {response && (
        <pre className="whitespace-pre-wrap bg-gray-900 border border-gray-700 rounded-lg p-6 mt-6 text-gray-200">
          {response}
        </pre>
      )}

    </main>
  );
}

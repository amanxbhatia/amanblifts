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
  <main className="min-h-screen bg-black text-white px-6 py-20">
    
    <div className="max-w-2xl mx-auto">
      
      <h1 className="text-4xl font-bold mb-4 text-center">
        AmanBlifts AI Coach
      </h1>

      <p className="text-gray-400 text-center mb-12">
        Get a simple workout plan based on your goal and weekly availability.
      </p>

      <div className="border border-gray-800 rounded-2xl p-8 space-y-6">
        
        <div>
          <label className="block text-sm mb-2 text-gray-400">
            Training Goal
          </label>
          <select
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="">Select goal</option>
            <option value="muscle">Muscle Gain</option>
            <option value="fatloss">Fat Loss</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-400">
            Workout Days per Week
          </label>
          <select
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gray-500"

            value={days}
            onChange={(e) => setDays(e.target.value)}
          >
            <option value="">Select days</option>
            <option value="3">3 Days</option>
            <option value="4">4 Days</option>
            <option value="5">5 Days</option>
          </select>
        </div>

        <button
          onClick={getPlan}
         className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition"

        >
          Generate My Plan
        </button>

      </div>

      {response && (
        <div className="mt-10 border border-gray-800 rounded-2xl p-8 bg-gray-950">
          <h2 className="text-xl font-semibold mb-4">
            Your Workout Plan
          </h2>
          <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed">
            {response}
          </pre>
        </div>
      )}

    </div>

  </main>
);

}

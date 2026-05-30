"use client";

import { useState } from "react";

type College = {
  id: number;
  name: string;
  location: string;
};

export default function PredictorForm() {
  const [rank, setRank] = useState("");
  const [data, setData] = useState<College[]>([]);

  async function predict() {
    const res = await fetch("/api/predictor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rank: Number(rank),
      }),
    });

    setData(await res.json());
    console.log(await res.text());
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Rank"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
        className="border p-2 rounded"
      />

      <button onClick={predict} className="border px-4 py-2 ml-2 rounded">
        Predict
      </button>

      <div className="mt-6">
        {data.map((college) => (
          <div key={college.id} className="border p-3 rounded mb-2">
            {college.name} - {college.location}
          </div>
        ))}
      </div>
    </div>
  );
}

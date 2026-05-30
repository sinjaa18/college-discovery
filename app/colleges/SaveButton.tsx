"use client";

import { useEffect, useState } from "react";

export default function SaveButton({ id }: { id: number }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("saved-colleges") || "[]");

    setSaved(items.includes(id));
  }, [id]);

  function toggleSave() {
    const items: number[] = JSON.parse(
      localStorage.getItem("saved-colleges") || "[]",
    );

    let updated: number[];

    if (items.includes(id)) {
      updated = items.filter((x) => x !== id);
      setSaved(false);
    } else {
      updated = [...items, id];
      setSaved(true);
    }

    localStorage.setItem("saved-colleges", JSON.stringify(updated));
  }

  return (
    <button onClick={toggleSave} className="border px-3 py-2 rounded ml-2">
      {saved ? "Saved" : "Save"}
    </button>
  );
}

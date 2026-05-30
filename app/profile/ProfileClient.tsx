"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function ProfileClient() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  function logout() {
    localStorage.removeItem("user");

    window.location.href = "/";
  }

  if (!user) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div className="border rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <p className="mb-2">
        <strong>Name:</strong> {user.name}
      </p>

      <p className="mb-4">
        <strong>Email:</strong> {user.email}
      </p>

      <button onClick={logout} className="border px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}

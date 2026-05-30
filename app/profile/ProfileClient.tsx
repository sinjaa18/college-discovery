"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function ProfileClient() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (!stored) {
      router.push("/login");
      return;
    }

    setUser(JSON.parse(stored));
  }, [router]);

  function logout() {
    localStorage.removeItem("user");
    router.push("/");
  }

  if (!user) {
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

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setLoggedIn(!!user);
  }, []);

  return (
    <nav className="border-b p-4 flex gap-4">
      <Link href="/colleges">Colleges</Link>
      <Link href="/saved">Saved</Link>
      <Link href="/predictor">Predictor</Link>

      {!loggedIn && (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </>
      )}

      {loggedIn && <Link href="/profile">Profile</Link>}
    </nav>
  );
}

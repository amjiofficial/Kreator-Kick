"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="card">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
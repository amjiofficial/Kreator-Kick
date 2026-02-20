"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#ef4444" }}>
        Oops! Something went wrong.
      </h1>
      <p style={{ marginBottom: "2rem" }}>{error.message}</p>
      <button
        style={{
          padding: "0.8rem 1.2rem",
          borderRadius: "8px",
          background: "#2563eb",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
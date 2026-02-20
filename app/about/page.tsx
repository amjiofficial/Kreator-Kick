import type { Metadata } from "next";

/* Page metadata */
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about us on our About page.",
  keywords: ["About", "Company", "Next.js", "React"],
};

/* Default export: React component */
export default function AboutPage() {
  return (
    <div
      className="card"
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#111827" }}>
        About Us
      </h1>
      <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
        Welcome to the About page! This page is styled professionally using a card layout, consistent with the rest of the website.
      </p>
      <p style={{ color: "#4b5563" }}>
        Here you can describe your company, services, mission, or team. Use this section to give visitors a clear idea about your business and values.
      </p>
    </div>
  );
}
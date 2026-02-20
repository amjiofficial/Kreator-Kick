import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about us on our About page.",
  keywords: ["About", "Company", "Next.js", "React"],
};

export default function AboutPage() {
  return (
    <div
      className="card"
      style={{
        maxWidth: "600px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <h1>About Us</h1>
      <p>
        Welcome to the About page! This page is styled with a professional card layout, consistent with the rest of the website.
      </p>
      <p>
        Here you can describe your company, services, mission, or team.
      </p>
    </div>
  );
}
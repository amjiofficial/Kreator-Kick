export default function HomePage() {
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
        Welcome to My Website
      </h1>
      <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
        This is the Home page styled professionally using a card layout.
      </p>
      <p style={{ color: "#4b5563" }}>
        You can use this layout for all pages. It’s responsive, centered, and matches your global styling.
      </p>
    </div>
  );
}
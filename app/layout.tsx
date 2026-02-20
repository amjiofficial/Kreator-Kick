import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description: "Professional Next.js website with card layout.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "#f0f4f8",
        }}
      >
        {/* Header */}
        <header
          style={{
            background: "#ffffff",
            padding: "1rem 2rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <div
            className="container"
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            <h1 style={{ color: "#111827" }}>My Website</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/signup">Sign Up</Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main
            style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
              }}
            >
              {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            background: "#ffffff",
            borderTop: "1px solid #e5e7eb",
            padding: "1.5rem 2rem",
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          © 2026 My Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
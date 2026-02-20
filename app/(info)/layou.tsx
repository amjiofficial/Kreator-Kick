export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "#f4f4f4", padding: "30px" }}>
      <h2>Information Pages</h2>
      {children}
    </div>
  );
}
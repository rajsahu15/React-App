export default function Home() {
  return (
    <section id="home" style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "100px",
      background: "linear-gradient(to right, #0F0E47, #272757)"
    }}>
      <div>
        <h1>Smart Timesheet Management</h1>
        <p>Track, manage and optimize your team's productivity.</p>
        <button className="btn">Get Started</button>
      </div>

      <img 
        src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600"
        style={{ borderRadius: "12px" }}
      />
    </section>
  );
}
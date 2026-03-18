export default function Contact() {
  return (
    <section id="contact" style={{ height: "100vh" }}>
      <h1>Contact Us</h1>

      <input placeholder="Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <textarea placeholder="Message"></textarea><br /><br />

      <button className="btn">Send</button>
    </section>
  );
}
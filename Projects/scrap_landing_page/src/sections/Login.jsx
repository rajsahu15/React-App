export default function Login() {
  return (
    <section id="login" style={{ height: "100vh" }}>
      <h1>Login</h1>

      <input placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button className="btn">Login</button>
    </section>
  );
}
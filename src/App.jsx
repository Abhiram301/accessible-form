import { useState } from "react";

function App() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setError("All fields are required");
    } else {
      setError("");
      alert("Form submitted successfully ✅");
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          
          {/* Error message */}
          <p role="alert" aria-live="assertive" style={styles.error}>
            {error}
          </p>

          {/* Name */}
          <label style={styles.label} htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            style={styles.input}
          />

          {/* Email */}
          <label style={styles.label} htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            aria-describedby="email-info"
            style={styles.input}
          />
          <small id="email-info" style={styles.help}>
            We will not share your email
          </small>

          {/* Message */}
          <label style={styles.label} htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            style={styles.textarea}
          ></textarea>

          {/* Button */}
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

const styles = {
  main: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#111",
    fontWeight: "bold",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#333",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    background: "#f9f9f9",
    color: "#000",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    background: "#f9f9f9",
    color: "#000",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
  help: {
    fontSize: "12px",
    color: "#555",
    marginBottom: "10px",
    display: "block",
  },
};

export default App;
import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user"));
    if (saved) setUser(saved);
  }, []);

  const login = (e) => {
    e.preventDefault();

    const newUser = { name, email };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      <h2>👤 Profile Page</h2>

      {!user ? (
        <form onSubmit={login} style={styles.form}>
          <h3>Login</h3>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button style={styles.loginBtn}>Login</button>
        </form>
      ) : (
        <div style={styles.card}>
          <h3>Welcome 👋</h3>
          <p>{user.name}</p>
          <p>{user.email}</p>

          <button onClick={logout} style={styles.logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "250px",
  },

  loginBtn: {
    background: "#2563eb",
    color: "white",
    padding: "8px",
    border: "none",
  },

  card: {
    background: "#e0f2fe",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
  },

  logout: {
    marginTop: "10px",
    background: "red",
    color: "white",
    border: "none",
    padding: "8px",
  },
};
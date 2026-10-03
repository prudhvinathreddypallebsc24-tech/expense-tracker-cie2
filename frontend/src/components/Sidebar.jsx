import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>💰 ExpenseTracker</h2>

      <nav>
        <Link to="/" style={styles.link}>📊 Dashboard</Link>
        <Link to="/income" style={styles.link}>💰 Income</Link>
        <Link to="/expenses" style={styles.link}>💸 Expenses</Link>
        <Link to="/profile" style={styles.link}>👤 Profile</Link>
      </nav>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    minHeight: "100vh",
    background: "#0f172a",
    padding: "20px",
    color: "white",
  },
  title: {
    marginBottom: "20px",
    fontSize: "20px",
  },
  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "6px",
  },
};
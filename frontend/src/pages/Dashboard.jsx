import { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(data);
  };

  const addTransaction = (data) => {
    const all = JSON.parse(localStorage.getItem("transactions")) || [];

    const now = new Date();

    const newItem = {
      id: Date.now(),
      type: data.type,
      amount: Number(data.amount) || 0,
      category: data.category || "General",
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };

    const updated = [...all, newItem];

    localStorage.setItem("transactions", JSON.stringify(updated));
    setTransactions(updated);
  };

  const deleteTransaction = (id) => {
    const all = JSON.parse(localStorage.getItem("transactions")) || [];
    const updated = all.filter((t) => t.id !== id);

    localStorage.setItem("transactions", JSON.stringify(updated));
    setTransactions(updated);
  };

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + Number(b.amount || 0), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + Number(b.amount || 0), 0);

  const balance = income - expense;

  const savings =
    income === 0 ? 0 : ((balance / income) * 100).toFixed(2);

  return (
    <div>
      <h2>📊 Dashboard</h2>

      <div style={styles.cards}>
        <div style={styles.card}>💰 Income: ₹{income}</div>
        <div style={styles.card}>💸 Expense: ₹{expense}</div>
        <div style={styles.card}>📊 Balance: ₹{balance}</div>
        <div style={styles.card}>📈 Savings: {savings}%</div>
      </div>

      <TransactionForm onAdd={addTransaction} />

      <h3>Transactions</h3>

      {transactions.map((t) => (
        <div key={t.id} style={styles.item}>
          <div>
            <b>{t.type.toUpperCase()}</b> - ₹{t.amount} - {t.category}
            <br />
            📅 {t.date} | ⏰ {t.time}
          </div>

          <button onClick={() => deleteTransaction(t.id)} style={styles.btn}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    marginTop: "20px",
  },
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    background: "#f1f5f9",
    padding: "10px",
    marginTop: "10px",
  },
  btn: {
    background: "red",
    color: "white",
    border: "none",
  },
};
import { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!amount) return;

    onAdd({
      type,
      amount: Number(amount),
      category,
    });

    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={submit} style={styles.form}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />

      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />

      <button>Add</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
};
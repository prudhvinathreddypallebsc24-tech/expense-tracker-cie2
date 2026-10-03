import { useState } from "react";
import axios from "axios";

export default function TransactionModal({ onClose, onSaved }) {
  const [form, setForm] = useState({
    type: "income",
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/transactions", form);
    onSaved();
    onClose();
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h3>Add Transaction</h3>

        <select name="type" onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input name="amount" placeholder="Amount" onChange={handleChange} />
        <input name="category" placeholder="Category" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />

        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
};

const modal = {
  background: "white",
  padding: "20px",
  width: "300px",
  margin: "100px auto",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};
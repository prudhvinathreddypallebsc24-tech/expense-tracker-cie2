const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// =======================
// DATABASE (IN MEMORY)
// =======================
let transactions = [];

// =======================
// GET ALL TRANSACTIONS
// =======================
app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

// =======================
// CREATE TRANSACTION
// =======================
app.post("/api/transactions", (req, res) => {
  const { type, amount, category } = req.body;

  const now = new Date();

  const newTransaction = {
    id: Date.now(),
    type, // income / expense
    amount: Number(amount),
    category,
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
  };

  transactions.push(newTransaction);

  res.json(newTransaction);
});

// =======================
// DELETE TRANSACTION
// =======================
app.delete("/api/transactions/:id", (req, res) => {
  const id = Number(req.params.id);

  transactions = transactions.filter((t) => t.id !== id);

  res.json({
    message: "Transaction deleted successfully",
    remaining: transactions,
  });
});

// =======================
// SERVER START
// =======================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
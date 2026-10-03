import axios from "axios";

export default function TransactionList({ transactions, refresh }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    refresh();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Recent Transactions</h3>

      {transactions.map((t) => (
        <div
          key={t.id}
          style={{
            padding: "10px",
            margin: "10px 0",
            background: "#f8fafc",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <strong>{t.category}</strong> - ₹{t.amount} ({t.type})
          </div>

          <div>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
            <button onClick={() => alert("Edit feature coming!")}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
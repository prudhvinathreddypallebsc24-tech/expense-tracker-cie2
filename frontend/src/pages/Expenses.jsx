import { useEffect, useState } from "react";

export default function Expenses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("transactions")) || [];
    setData(all.filter((t) => t.type === "expense"));
  }, []);

  return (
    <div>
      <h2>💸 Expenses Page</h2>

      {data.length === 0 ? (
        <p>No expense records found</p>
      ) : (
        data.map((t) => (
          <div key={t.id} style={styles.card}>
            <b>₹{t.amount}</b> - {t.category}
            <br />
            📅 {t.date} | ⏰ {t.time}
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#fef2f2",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
  },
};
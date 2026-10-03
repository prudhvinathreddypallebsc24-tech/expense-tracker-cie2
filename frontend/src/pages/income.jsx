import { useEffect, useState } from "react";

export default function Income() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("transactions")) || [];
    setData(all.filter((t) => t.type === "income"));
  }, []);

  return (
    <div>
      <h2>💰 Income Page</h2>

      {data.length === 0 ? (
        <p>No income records found</p>
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
    background: "#ecfdf5",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
  },
};
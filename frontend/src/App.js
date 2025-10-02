import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((r) => r.json())
      .then(setHealth)
      .catch((e) => console.error("Health check failed:", e));
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>QuickTalk Frontend</h1>
      <p>React app is running successfully.</p>
      <pre>{health ? JSON.stringify(health, null, 2) : "Checking backend..."}</pre>
    </div>
  );
}

export default App;

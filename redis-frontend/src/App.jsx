import { useState } from "react";

function App() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const save = async () => {
    await fetch(`http://localhost:8080/api/redis/save?key=${key}&value=${value}`, { method: "POST" });
    alert("Saved!");
  };

  const get = async () => {
    const res = await fetch(`http://localhost:8080/api/redis/get?key=${key}`);
    const text = await res.text();
    setResult(text);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redis Key-Value Store</h1>
      <input placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)} />
      <input placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={save}>Save</button>
      <button onClick={get}>Get</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;

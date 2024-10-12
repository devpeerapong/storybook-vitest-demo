import { useState } from "react";
import { Counter } from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return <Counter value={count} onChange={setCount} />;
}

export default App;

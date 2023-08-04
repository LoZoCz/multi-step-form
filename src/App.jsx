import "../scss/default.scss";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <h1 onClick={setCount(count + 1)}>LoZo count</h1>;
}

export default App;

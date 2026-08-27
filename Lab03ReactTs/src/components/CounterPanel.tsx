import { useState } from "react";

export function CounterPanel() {
  const [count, setCount] = useState<number>(0);

  return (
    <section>
      <h3>Counter</h3>

      <p style={{ fontSize: "24px" }}>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </section>
  );
}
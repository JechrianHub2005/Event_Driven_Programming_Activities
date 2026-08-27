import { Panel } from "./components/Panel";
import { Badge } from "./components/Badge";

function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <header style={{ padding: "25px", backgroundColor: "#e8f0fe" }}>
        <h1 style={{ fontSize: "32px", margin: 0, color: "black" }}>
          Event Driven Programming
        </h1>

        <p style={{ fontSize: "18px", margin: "8px 0 0" }}>
          Laboratory Activity 3
        </p>
      </header>

      <main style={{ padding: "40px" }}>
        <Panel title="Lab 03">
          <h2 style={{ fontSize: "28px", marginBottom: "5px" }}>
            Christian Jade
          </h2>

          <p style={{ fontSize: "20px", marginBottom: "25px" }}>
            <strong>BSIT 3rd Year - Section B</strong>
          </p>

          <Badge title="Status" tone="success">
            Active
          </Badge>
        </Panel>
      </main>

      <footer
        style={{
          padding: "15px",
          backgroundColor: "#e8f0fe",
          fontSize: "16px",
        }}
      >
        <p>BSIT 3rd Year - Section B | React + TypeScript</p>
      </footer>
    </div>
  );
}

export default App;
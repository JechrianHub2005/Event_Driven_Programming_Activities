import React, { useState } from "react";

export function EventPlayground() {
  // Event log state
  const [logs, setLogs] = useState<string[]>([]);

  // Keyboard input state
  const [text, setText] = useState("");

  // Toggle for stopPropagation
  const [stopBubble, setStopBubble] = useState(false);

  // Toggle for preventDefault
  const [preventLink, setPreventLink] = useState(false);

  // Add new log entry
  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev]);
  };

  // Parent click handler
  const parentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    addLog(`Parent: ${e.currentTarget.dataset.label}`);
  };

  // Child click handler
  const childClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (stopBubble) e.stopPropagation();
    addLog(`Child: ${e.currentTarget.dataset.label}`);
  };

  // Escape key handler
  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setText("");
      addLog("Escape pressed");
    }
  };

  // Link click handler
  const linkHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (preventLink) {
      e.preventDefault();
      addLog("Link prevented");
    } else {
      addLog("Link clicked");
    }
  };

  return (
    <div>
      <h2>Event Playground</h2>

      {/* STEP 3: Propagation Controls */}
      <label>
        <input
          type="checkbox"
          checked={stopBubble}
          onChange={() => setStopBubble(!stopBubble)}
        />
        Stop child bubble
      </label>

      <br />
      <br />

      {/* STEP 3: Prevent Default Control */}
      <label>
        <input
          type="checkbox"
          checked={preventLink}
          onChange={() => setPreventLink(!preventLink)}
        />
        Prevent link default
      </label>

      {/* STEP 1: Nested Click Surfaces */}
      <div
        data-label="Parent Surface"
        onClick={parentClick}
        style={{
          background: "#dbeafe",
          padding: 20,
          marginTop: 20,
        }}
      >
        Parent Surface

        <div
          data-label="Child Surface"
          onClick={childClick}
          style={{
            background: "#93c5fd",
            padding: 20,
            marginTop: 10,
          }}
        >
          Child Surface
        </div>
      </div>

      <br />

      {/* STEP 2: Keyboard Handling */}
      <input
        value={text}
        placeholder="Type then press Escape"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={keyHandler}
      />

      <br />
      <br />

      {/* STEP 3: Link with preventDefault */}
      <a href="#" onClick={linkHandler}>
        Sample Link
      </a>

      {/* Event Log Output */}
      <div
        style={{
          border: "1px solid gray",
          marginTop: 20,
          padding: 10,
          textAlign: "left",
          minHeight: 120,
        }}
      >
        <strong>Event Log</strong>

        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
}
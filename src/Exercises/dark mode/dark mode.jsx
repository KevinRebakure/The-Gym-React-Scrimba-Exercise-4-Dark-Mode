import Box from "./components/Box";
import boxes from "./boxes";
import { useState } from "react";

export default function App() {
  const [squares, setSquares] = useState(boxes);
  function toggle(id) {
    setSquares((prev) => {
      return prev.map((square) =>
        square.id === id ? { ...square, on: !square.on } : square,
      );
    });
  }

  return (
    <div className="grid w-[600px] grid-cols-3 gap-3 border">
      {squares.map((square) => (
        <Box
          key={square.id}
          on={square.on}
          toggle={() => {
            toggle(square.id);
          }}
        />
      ))}
    </div>
  );
}

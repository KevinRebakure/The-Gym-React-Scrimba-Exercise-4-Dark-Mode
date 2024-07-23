import { useState } from "react";
import WindowTracker from "./WindowTracker";

export default function App() {
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow((prev) => !prev);
    console.log(`The state is: ${show}`);
  }

  return (
    <>
      <div className="h-[100vh] space-y-5 bg-orange-500 p-10 text-center">
        <button
          onClick={handleClick}
          className="rounded-xl bg-gray-100 px-5 py-3 transition-all duration-100 hover:bg-gray-700 hover:text-white"
        >
          Toggle WindowTracker
        </button>
        {show && <WindowTracker />}
      </div>
    </>
  );
}

import { useState } from "react";

export default function App() {
  const [size, setSize] = useState(window.innerWidth);
  const [show, setShow] = useState(true);

  window.addEventListener("resize", function () {
    setSize(this.window.innerWidth);
  });

  function handleClick() {
    setShow((prev) => !prev);
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
        {show && (
          <p className="text-4xl font-semibold text-white">
            Window width: {size}
          </p>
        )}
      </div>
    </>
  );
}

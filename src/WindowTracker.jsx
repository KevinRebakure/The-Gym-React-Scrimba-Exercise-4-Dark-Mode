import { useEffect, useState } from "react";

export default function WindowTracker() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function watchResize() {
      console.log("Listening");
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", watchResize);

    return function () {
      console.log("removed listener");
      window.removeEventListener("resize", watchResize);
    };
  }, []);

  return (
    <>
      <p className="text-4xl font-semibold text-white">Window width: {size}</p>
    </>
  );
}

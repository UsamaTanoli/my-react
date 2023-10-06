import { useState } from "react";

function App() {
  const [color, setColor] = useState("navajowhite");
  const [colorName, setColorName] = useState(null);

  function red() {
    setColor("red");
    setColorName("Red");
  }

  function blue() {
    setColor("blue");
    setColorName("Blue");
  }

  function orange() {
    setColor("orange");
    setColorName("Orange");
  }

  function goldenrod() {
    setColor("goldenrod");
    setColorName("Goldenrod");
  }

  function teal() {
    setColor("#008080");
    setColorName("Teal");
  }

  function deepskyBlue() {
    setColor("deepskyblue");
    setColorName("DeepskyBlue");
  }

  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-02">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-3xl">
          <button
            onClick={red}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={blue}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={orange}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={goldenrod}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "goldenrod" }}
          >
            Goldenrod
          </button>

          <button
            onClick={teal}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#008080" }}
          >
            Teal
          </button>

          <button
            onClick={deepskyBlue}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "deepskyBlue" }}
          >
            DeepskyBlue
          </button>
        </div>
      </div>
      {colorName && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
          {colorName}
        </div>
      )}
    </div>
  );
}

export default App;

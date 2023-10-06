import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charactersAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charactersAllowed]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 24);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charactersAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-10 bg-gray-800 text-yellow-600">
        <h1 className="text-white text-center my-3 text-2xl">Password Generator</h1>
        <div className="flex flex-col md:flex-row shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 mb-2 md:mb-0 md:w-5/6"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyToClipboard} className="md:w-1/6 bg-blue-800 text-white px-3 py-1">
            Copy
          </button>
        </div>
        <div className="flex flex-col md:flex-row text-sm gap-y-2 md:gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              max={24}
              min={8}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="md:hidden">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultValue={charactersAllowed}
              id="charactersInput"
              onChange={() => {
                setCharactersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charactersInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

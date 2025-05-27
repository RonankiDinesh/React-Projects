import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(6);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    if (numberAllowed) str += "0123456789";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-2xl px-6 py-6 bg-gray-900 text-orange-400">
        <h1 className="text-white text-2xl font-bold text-center mb-6">🔐 Password Generator</h1>

        <div className="flex shadow-inner rounded-lg overflow-hidden mb-5 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-gray-100 text-gray-800 font-bold font-mono text-l tracking-wider rounded-l"
            placeholder="Password"
            readOnly
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition duration-200"
            onClick={() => {
              navigator.clipboard.writeText(password);
              alert("Password copied!");
            }}
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="w-full cursor-pointer accent-orange-500"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white font-medium">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              className="accent-orange-500"
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput" className="text-white">Include Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              className="accent-orange-500"
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="characterInput" className="text-white">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

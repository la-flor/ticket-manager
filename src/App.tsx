import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="App flex flex-row justify-center w-full"
    >
      <div className="w-1/4 my-20 flex flex-col gap-2">
        <label htmlFor="username" className="">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="p-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;

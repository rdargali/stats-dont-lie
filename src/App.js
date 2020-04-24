import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const allPlayers = `https://www.balldontlie.io/api/v1/players?page=1`;

  useEffect(() => {
    axios.get(allPlayers).then((res) => console.log(res.data));
  }, []);
  return (
    <div className="App">
      <h1>whatup</h1>
    </div>
  );
};

export default App;

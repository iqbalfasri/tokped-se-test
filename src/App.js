import React, { useState } from "react";
import "./App.css";

const myStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white"
};

function App() {
  const [amount, setAmount] = useState("");

  const formating = amount => {
    // Handle carachter
    let toRp = amount.replace(/[^,\d]/g, "").toString();
    let split = toRp.split(",");
    //
    let sisa = split[0].length % 3;
    //
    let rupiah = split[0].substr(0, sisa);
    //
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      let separator = sisa ? "." : "";
      let _rp = rupiah += separator + ribuan.join(".");
      setAmount(_rp)
    }
  };

  return (
    <div className="App" style={myStyle}>
      <h1>Mata uang indonesia</h1>
      {amount}
      <input onChange={e => formating(e.target.value)} />
    </div>
  );
}

export default App;

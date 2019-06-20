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
  const [amount, setAmount] = useState("0");

  const formating = (e, amount) => {
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
      let _rp = (rupiah += separator + ribuan.join("."));
      setAmount(_rp);
    }
  };

  return (
    <div className="App" style={myStyle}>
      <h1>Indonesia Rupiah</h1>
      <div className="separator" />
      <div className="output-amount">
        <p>Rp {amount}</p>
      </div>
      <div className="input-wrapper">
        <input
          type="number"
          placeholder="Masukan angka"
          className="input-amount"
          onKeyDown={e => {
            if (e.key == "Enter") {
              formating(e, e.target.value);
            }
          }}
        />
        <p className="input-muted-text">* Tekan enter untuk melihat hasil yang di masukan </p>
      </div>
    </div>
  );
}

export default App;

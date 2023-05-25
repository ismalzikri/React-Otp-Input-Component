import { useState } from "react";
import OtpInput from "./components/OtpInput";
import "./App.css";

export default function App() {
  const [otp, setOtp] = useState("");
  const onChange = (value: string) => setOtp(value);

  return (
    <div className="container">
      <h1>Proof Of Concept</h1>
      <OtpInput value={otp} valueLength={4} onChange={onChange} />
      <section>
        <h2>Feature :</h2>
        <ul>
          <li>
            <b>Autofocus</b> cursor when first render.
          </li>
          <li>
            Validation first item input <b>required</b>.
          </li>
          <li>
            <b>Auto-move</b> cursor to next input.
          </li>
          <li>
            <b>Auto-trigger</b> something when the last input field filled
          </li>
          <li>
            Bottom radar <b>active</b> change color when input is filled or not.
          </li>
        </ul>
      </section>
      <footer className="footer">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <a href="https://www.tiket.com/login?ref=https://www.tiket.com/">
            Tiket.com OTP Experience
          </a>
          <a href="https://github.com/Laravel007/React-Otp-Input-Component">
            Ismal Zikri
          </a>
        </div>
      </footer>
    </div>
  );
}

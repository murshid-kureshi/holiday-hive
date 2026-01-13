import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const handleGetOtp = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter valid 10-digit phone number");
      return;
    }

    setError("");
    setStep(2);
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next box
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleLogin = () => {
    if (otp.join("").length !== 6) {
      setError("Enter complete 6-digit OTP");
      return;
    }

    setError("");
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-box glass">
        <h2>Holiday Hive</h2>

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {error && <small className="error">{error}</small>}

            <button onClick={handleGetOtp}>Get OTP</button>
          </>
        )}

        {step === 2 && (
          <>
            <p className="info-text">Enter 6-digit OTP</p>

            <div className="otp-box">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) =>
                    handleOtpChange(e.target.value, index)
                  }
                />
              ))}
            </div>

            {error && <small className="error">{error}</small>}

            <button onClick={handleLogin}>Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;


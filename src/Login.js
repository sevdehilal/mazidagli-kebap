// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // useHistory yerine useNavigate

const Login = () => {
  const navigate = useNavigate();  // useHistory yerine useNavigate kullanılıyor
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "suat" && password === "9695") {
      navigate("/gunluk-menu");  // Yönetim paneline yönlendirme
    } else {
      alert("Kullanıcı adı veya şifre hatalı");
    }
  };

  return (
    <div>
      <h2>Giriş Yap</h2>
      <div>
        <label>Kullanıcı Adı:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Şifre:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
};

export default Login;

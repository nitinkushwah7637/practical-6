import React, { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        {isLoggedIn ? (
          <>
            <div style={{ fontSize: "40px" }}>✓</div>

            <h1>Welcome Back!</h1>

            <p>You are successfully logged in.</p>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <div style={{ fontSize: "40px" }}>👤</div>

            <h1>Welcome!</h1>

            <p>Please log in to continue.</p>

            <button onClick={handleLogin}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginStatus;
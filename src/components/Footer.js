import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "40px",
        background: "linear-gradient(90deg, #667eea, #764ba2)",
        color: "white",
        textAlign: "center",
        padding: "20px 0",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <p style={{ margin: "0", fontSize: "1rem" }}>
        💻 Built by <strong>Shaliya.B</strong> |{" "}
        <a
          href="https://github.com/Shaliya1908"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ffe082", textDecoration: "none" }}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;

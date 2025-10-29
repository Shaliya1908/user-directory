import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    // Fetch 30 fake users from DummyJSON API
    fetch("https://dummyjson.com/users?limit=30")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setFiltered(data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (query) => {
    const result = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <Box sx={{ bgcolor: "#f7f8fa", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "white",
          textAlign: "center",
          py: 5,
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
          👥 User Directory
        </Typography>
        <Typography variant="h6">
          Explore user profiles fetched from a public API
        </Typography>
      </Box>

      {/* Search Bar */}
      <Container sx={{ mt: 4 }}>
        <SearchBar onSearch={handleSearch} />

        {/* User Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            gap: "20px",
          }}
        >
          {filtered.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default App;

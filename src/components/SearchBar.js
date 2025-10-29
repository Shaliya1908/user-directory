import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <Box sx={{ textAlign: "center", marginBottom: 3 }}>
      <TextField
        label="🔍 Search users by name"
        variant="outlined"
        value={query}
        onChange={handleChange}
        sx={{
          width: "70%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: 2,
          boxShadow: 2,
        }}
      />
    </Box>
  );
};

export default SearchBar;

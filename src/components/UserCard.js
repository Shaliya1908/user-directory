import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Card
      sx={{
        width: 280,
        height: 260,
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        transition: "0.3s",
        backgroundColor: "#fff",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <Avatar
        src={user.image}
        alt={user.firstName}
        sx={{
          width: 60,
          height: 60,
          bgcolor: "#667eea",
          mb: 2,
          fontSize: "1.5rem",
          color: "white",
        }}
      >
        {user.firstName ? user.firstName.charAt(0) : "?"}
      </Avatar>

      <CardContent sx={{ textAlign: "center", p: 0 }}>
        <Typography variant="h6" fontWeight="bold">
          {user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : "No Name"}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          📧 {user.email || "No Email"}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          📞 {user.phone || "No Phone"}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          📍 {user.address?.city || "Unknown City"}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          🏢 {user.company?.name || "No Company Info"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;

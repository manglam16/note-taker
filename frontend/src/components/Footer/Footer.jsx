import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          padding: "2px",
          width: "100%",
        }}
      >
        <Typography align="center" variant="h6">
          Made With Love By Me
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;

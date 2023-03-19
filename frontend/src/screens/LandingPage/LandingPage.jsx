import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  return (
    <>
      <Box alignItems="center" sx={{ marginTop: "20vh" }}>
        <Box>
          <Typography textAlign="center" variant="h2" margin="auto">
            Welcome to Note Taker
          </Typography>
          <Typography textAlign="center" variant="h5" sx={{ marginTop: "5vh" }}>
            A minimalistic note taking app
          </Typography>
          <Typography textAlign="center" variant="h5">
            Here you can keep all your notes in one place
          </Typography>
        </Box>
        <Stack
          spacing={7}
          direction="row"
          sx={{ marginLeft: "80vh", marginTop: "10vh" }}
        >
          <Button variant="contained" size="large">
            Login
          </Button>
          <Button variant="outlined" size="large">
            Signup
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default LandingPage;

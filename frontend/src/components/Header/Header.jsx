import * as React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography, TextField } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Box sx={{ minHeight: "6vh", backgroundColor: "#5FC3E4" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding="10px"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextSnippetIcon padding="10px" fontSize="large" text />
            <Typography textAlign="left" variant="h4" fontWeight="bold">
              <Link to="/">Note Taker</Link>
            </Typography>
          </Stack>

          <TextField
            // color="white"
            id="outlined-basic"
            label="Search Note"
            variant="outlined"
            size="small"
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6" marginRight="30px">
              <Link to="/mynotes">My Notes</Link>
            </Typography>
            <Typography variant="h6" marginRight="30px">
              Manglam Paliwal
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Header;

import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainBack">
      <Box sx={{ mx: "auto", width: "75%" }}>
        <Stack>
          {title && (
            <>
              <Typography variant="h3" sx={{ margin: "10px" }}>
                {title}
              </Typography>
              <hr></hr>
            </>
          )}
        </Stack>
        {children}
      </Box>
    </div>
  );
};

export default MainScreen;

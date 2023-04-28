import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomAppBar from "../components/ui/CustomAppBar";

const Home = () => {
  return (
    <>
      <CustomAppBar title="Home" />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography paragraph></Typography>
      </Box>
    </>
  );
};

export default Home;
import { Box } from "@mui/material";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Homelayout from "./HomeLayout";

function App() {
  return (
    <Box>
      <Box>
        <React.Fragment>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homelayout />} />
            </Routes>
          </BrowserRouter>
        </React.Fragment>
      </Box>
    </Box>
  );
}

export default App;

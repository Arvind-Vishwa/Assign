import React from "react";
import { Box, Container } from "@mui/material";
import TabCard from "./components/Tabcard.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
  return (
     <>
     <h2>Asssignment</h2>
    <Container
      maxWidth="sm"
      sx={{ display: "flex", flexDirection: "column", gap: 3, py: 4,marginRight:18 }}
    >
     
      <Box>
        <TabCard />
      </Box>
      <Box>
        <Gallery />
      </Box>
    </Container>
    </>
  );
}

export default App;
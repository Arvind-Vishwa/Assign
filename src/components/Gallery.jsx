import React, { useState } from "react";
import { Box, IconButton, Paper, Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const demoImages = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a5957?w=500",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=300",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300",
];

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function Gallery() {
  const [images, setImages] = useState(demoImages);
  const [startIdx, setStartIdx] = useState(0);

  const maxVisible = 3;

 
  const handlePrev = () => {
    setStartIdx((prev) =>
      prev === 0 ? images.length - maxVisible : prev - 1
    );
  };

  const handleNext = () => {
    setStartIdx((prev) =>
      prev + maxVisible >= images.length ? 0 : prev + 1
    );
  };

  
  const handleAdd = () => {
    const newUrl = prompt("Enter image URL:");
    if (newUrl && newUrl.startsWith("http")) {
      setImages((imgs) => [...imgs, newUrl]);
    } else {
      alert("Please enter a valid image URL.");
    }
  };

 
  const visibleImages = images.slice(startIdx, startIdx + maxVisible);
  if (visibleImages.length < maxVisible && images.length >= maxVisible) {
    visibleImages.push(
      ...images.slice(0, maxVisible - visibleImages.length)
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        background: "#23272e",
        padding: 3,
        color: "#f7f7f7",
        maxWidth: 700,
        mx: "auto",
      }}
    >
      
      <Box display="flex" alignItems="center" mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          
          <Box
            px={2}
            py={1}
            bgcolor="#111"
            color="#fff"
            borderRadius={2}
            padding={2}
            fontSize="1.1rem"
            letterSpacing={0.5}
          >
            Gallery
          </Box>
        </Box>

        <Box flexGrow={2} />

        <Button
          variant="contained"
          
          sx={{
            bgcolor: "#393e46",
            color: "#fff",
            borderRadius: 4,
            px: 3,
            py: 1,
            fontWeight: 500,
            transition: "0.2s",
            boxShadow: "none",
            marginRight: 2,
            "&:hover": { bgcolor: "#222831" },
          }}
          onClick={handleAdd}
        >
          + ADD IMAGE
        </Button>

        <IconButton
          onClick={handlePrev}
          sx={{
            bgcolor: "#393e46",
            color: "#fff",
            mx: 0.5,
            "&:hover": { bgcolor: "#222831" },
            boxShadow: 2,
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            bgcolor: "#393e46",
            color: "#fff",
            mx: 0.5,
            "&:hover": { bgcolor: "#222831" },
            boxShadow: 2,
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      
      <Box display="flex" justifyContent="center" gap={2} mb={2}>
        {visibleImages.map((img, idx) => (
         <Box
  component={motion.img}
  src={img}
  alt="gallery"
  sx={{
    width: 150,
    height: 150,
    borderRadius: 3,
    objectFit: "cover",
    background: "#eee",
    boxShadow: "0 4px 18px rgba(0,0,0,0.20)",
    cursor: "pointer",
  }}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.15,boxShadow: "0 1px 5px rgba(0, 123, 255, 0.5)", }}  
  transition={{ duration: 0.2 }}
/>

        ))}
      </Box>
    </Paper>
  );
}

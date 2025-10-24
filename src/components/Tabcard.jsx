import React, { useState } from "react";
import { Box, Tabs, Tab, Paper } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const tabContent = [
  {
    label: "About Me",
    content: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM`,
  },
  {
    label: "Experiences",
    content: `Experience details go here.Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM`,
  },
  {
    label: "Recommended",
    content: `Recommended here.Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM`,
  },
];

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function TabCard() {
  const [value, setValue] = useState(0);

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        background: "#23272e",
        padding: 3,
        color: "#f7f7f7",
        width: "100%",
        maxWidth: "600px",
        mx: "auto",
        
      }}
    >
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        textColor="inherit"
        
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          "& .MuiTab-root": {
            borderRadius: 3,
            mx: 1,
            minWidth: 120,
            color: "#ccc",
            textTransform: "capitalize",
            
          },
          "& .Mui-selected": {
            background: "#000",
            color: "#fff",
            
          },
        }}
      >
        {tabContent.map((tab) => (
          <Tab key={tab.label} label={tab.label} />
        ))}
      </Tabs>

      <Box sx={{ mt: 2, minHeight: 120 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            
            transition={{ duration: 0.3 }}
          >
            <pre
              style={{
                fontFamily: "inherit",
                background: "none",
                border: "none",
                whiteSpace: "pre-line",
              }}
            >
              {tabContent[value].content}
            </pre>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Paper>
  );
}

// MotionTest.js
import React from "react";
import { motion } from "framer-motion";

const MotionTest = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{ padding: "20px", backgroundColor: "blue", color: "white" }}
  >
    Hello from Motion
  </motion.div>
);

export default MotionTest;

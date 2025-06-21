// src/pages/Home.jsx
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <motion.div
      className="min-h-screen bg-home bg-cover bg-center bg-fixed overflow-hidden"
      animate={{
        filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {/* Background */}
      {/* Nav Bar */}
      <Navbar />
      {/* Main Content */}
      {/* Footer */}
    </motion.div>
  );
};

export default Home;

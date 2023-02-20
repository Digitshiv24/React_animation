import { motion } from "framer-motion";

function App() {
  return (
    <div style={{ height: "200px", backgroundColor: "#9fc5e8", position: "relative" }}>
      <motion.div
        style={{ position: "absolute", bottom: "0", left: "0" }}
        animate={{ x: "calc(100vw - 120px)" }}
        transition={{ duration: 3, repeat: 2, repeatType: "loop" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60">
          <rect width="80" height="30" x="20" y="15" rx="10" fill="#fff" stroke="#000" strokeWidth="2" />
          <circle cx="40" cy="45" r="15" fill="#f9a25c" stroke="#000" strokeWidth="2" />
          <circle cx="80" cy="45" r="15" fill="#f9a25c" stroke="#000" strokeWidth="2" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60">
          <rect width="80" height="30" x="20" y="15" rx="10" fill="#fff" stroke="#000" strokeWidth="2" />
          <circle cx="40" cy="45" r="15" fill="#f9a25c" stroke="#000" strokeWidth="2" />
          <circle cx="80" cy="45" r="15" fill="#f9a25c" stroke="#000" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
}

export default App;
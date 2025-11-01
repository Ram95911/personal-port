import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onFinish }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Hide after 3 seconds (duration of animation)
    const timer = setTimeout(() => {
      setDone(true);
      onFinish?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 400 100"
        className="w-64 h-16"
      >
        <motion.path
          d="M20 50 Q80 10 150 50 T280 50"  // Replace with your signature path
          fill="none"
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}

import React, { useState, useEffect } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <h1>Welcome</h1>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Preloader;

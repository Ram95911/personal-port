// src/hooks/useScrollReveal.js
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (selector, options = {}) => {
  useEffect(() => {
    ScrollReveal().reveal(selector, {
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
      reset: true,
      ...options,
    });
  }, [selector, options]);
};

export default useScrollReveal;

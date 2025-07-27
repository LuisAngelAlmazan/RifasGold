"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface ScrollToHashProps {
  hash: string;
}

const ScrollToHash = ({ hash }: ScrollToHashProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!hash) return;

    const scroll = () => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Si ya estás en la página, igualmente forzar el scroll
    const timeout = setTimeout(scroll, 150);

    return () => clearTimeout(timeout);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;

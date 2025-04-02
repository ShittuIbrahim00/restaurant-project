import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="fixed w-2 h-2 bg-customColor rounded-full pointer-events-none transition-transform duration-75"
      style={{
        top: position.y - 2,
        left: position.x - 2,
        transform: "translate(-50%, -50%)",
        position: "fixed",
        zIndex: 9999,
      }}
    />
  );
}

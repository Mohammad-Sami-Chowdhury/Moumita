import React, { useEffect, useState } from "react";
import page3 from "../assets/page3.png";

export default function PageThree() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#E7E6E0]">
      <img
        className={`max-w-full object-cover lg:h-screen lg:w-full transition-opacity duration-1000 ease-in ${visible ? "opacity-100" : "opacity-0"}`}
        src={page3}
        alt="Page 3"
      />
    </div>
  );
}
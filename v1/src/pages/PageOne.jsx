import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import block1 from "../assets/block1.png";
import block2 from "../assets/block2.png";
import block3 from "../assets/block3.png";
import paperclip from "../assets/paperclip.png";
import moumita1 from "../assets/moumita1.jpg";
import moumita2 from "../assets/moumita2.jpg";
import moumita3 from "../assets/moumita3.jpg";
import next from "../assets/nxt-btn.png";

function PageOne() {
  const photos = [
    { id: 1, src: moumita1, name: "Moumita", caption: "Birthday Girl" },
    { id: 2, src: moumita2, name: "Moumita", caption: "Princess" },
    { id: 3, src: moumita3, name: "Moumita", caption: "Love" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check screen size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnd = (event, info) => {
    const threshold = isMobile ? 50 : 100; // Smaller threshold for mobile
    if (info.offset.x < -threshold) {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    } else if (info.offset.x > threshold) {
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };

  const float = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? (isMobile ? 200 : 300) : isMobile ? -200 : -300,
      opacity: 0,
      scale: 0.8,
      rotate: dir > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: -3,
    },
    exit: (dir) => ({
      x: dir < 0 ? (isMobile ? 200 : 300) : isMobile ? -200 : -300,
      opacity: 0,
      scale: 0.8,
      rotate: dir < 0 ? 15 : -15,
    }),
  };

  return (
    <div className="relative font-dancing flex items-center justify-center min-h-screen p-4 overflow-hidden bg-neutral-100">
      <div className="relative w-full max-w-[1200px] min-h-[500px] h-auto lg:h-[700px] p-4 md:p-6 lg:p-8 bg-[#fffaf6] rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        {/* Floating shapes - responsive positioning and sizing */}
        <motion.img
          className="absolute top-2 left-2 md:top-5 md:left-8 opacity-70 z-10 w-[60px] md:w-[100px] lg:w-[150px] xl:w-[200px] rotate-[45deg]"
          src={block1}
          alt=""
          {...float}
        />
        <motion.img
          className="absolute top-1 right-4 md:top-2 md:right-20 opacity-70 rotate-[15deg] z-10 w-[50px] md:w-[80px] lg:w-[100px] xl:w-[150px]"
          src={block3}
          alt=""
          {...float}
        />
        <motion.img
          className="absolute top-4 right-20 md:top-10 md:right-[300px] z-10 w-[70px] md:w-[120px] lg:w-[200px] xl:w-[250px]"
          src={block2}
          alt=""
          {...float}
        />
        <motion.img
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:bottom-[60px] md:left-[475px] opacity-70 z-10 w-[50px] md:w-[80px] lg:w-[100px] xl:w-[150px]"
          src={block3}
          alt=""
          {...float}
        />
        <motion.img
          className="absolute bottom-2 left-4 md:bottom-5 md:left-[200px] z-10 w-[60px] md:w-[100px] lg:w-[150px] xl:w-[200px]"
          src={block2}
          alt=""
          {...float}
        />
        <motion.img
          className="absolute -bottom-2 -right-4 md:-bottom-5 md:-right-20 opacity-70 w-[60px] md:w-[100px] lg:w-[150px] xl:w-[200px] z-10 rotate-[45deg]"
          src={block1}
          alt=""
          {...float}
        />

        {/* Photo Stack */}
        <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto md:mt-0">
          {photos.map((photo, index) => {
            if (index === currentIndex) return null;
            const offset = (index - currentIndex) * (isMobile ? 2 : 3);
            return (
              <motion.div
                key={photo.id}
                className="absolute border-2 border-amber-950 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto p-2 md:p-3 lg:p-4 bg-white shadow-lg rounded-sm pointer-events-none"
                style={{
                  zIndex: photos.length - Math.abs(index - currentIndex),
                  transform: `translateX(${offset}px) translateY(${offset}px) rotate(${
                    -2 + offset
                  }deg)`,
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  },
                }}
              >
                <div className="overflow-hidden w-full h-auto aspect-[4/5] opacity-80">
                  <img
                    src={photo.src}
                    alt=""
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <div className="text-center mt-2 text-xs md:text-sm text-stone-700 uppercase tracking-widest opacity-80">
                  {photo.name}
                </div>
              </motion.div>
            );
          })}

          {/* Main draggable photo */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
                rotate: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={false}
              dragElastic={0.5}
              onDragEnd={handleDragEnd}
              whileDrag={{
                scale: 1.05,
                rotate: 0,
                zIndex: 50,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              className="relative border-2 border-amber-950 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto p-2 md:p-3 lg:p-4 bg-white shadow-xl rounded-sm cursor-grab active:cursor-grabbing z-20"
            >
              <div className="absolute -top-3 md:-top-4 right-0 md:right-[0px] transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-transparent">
                <img
                  src={paperclip}
                  alt="paperclip"
                  className="w-full h-full"
                />
              </div>
              <div className="overflow-hidden w-full h-auto aspect-[4/5] pointer-events-none">
                <img
                  src={photos[currentIndex].src}
                  alt="Current"
                  className="object-cover w-full h-full rounded-sm pointer-events-none"
                />
              </div>
              <div className="font-dancing text-center mt-2 text-md md:text-md text-black uppercase tracking-widest pointer-events-none">
                {photos[currentIndex].name}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Photo counter */}
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-amber-600 scale-125"
                    : "bg-amber-300 hover:bg-amber-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right text - responsive adjustments */}
        <motion.div
          className="relative flex flex-col items-center lg:items-start text-stone-800 font-serif order-first lg:order-none lg:mb-0"
          {...float}
        >
          <div className="font-dancing text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider mb-1 md:mb-2">
            HAPPY
          </div>
          <div
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-script leading-none text-stone-900"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Birthday
          </div>
          <div className="md:mt-4 text-md md:text-2xl font-dancing text-stone-700 italic">
            {photos[currentIndex].caption}
          </div>
        </motion.div>
      </div>
      <Link to="/page-two" className="absolute bottom-4 right-4">
        <img className="w-[100px]" src={next} alt="" />
      </Link>
    </div>
  );
}

export default PageOne;

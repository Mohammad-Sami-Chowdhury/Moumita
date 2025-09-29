// import React, { useState, useRef } from "react";
// import {
//   FacebookIcon,
//   InstagramIcon,
//   LockIcon,
//   Play,
//   Pause,
//   Volume2,
// } from "lucide-react";
// import Image from "../src/assets/profile.png";

// // 🎵 Custom Audio Player Component
// const AudioPlayer = ({ title, src }) => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-[#1e293b] to-[#0f172a] rounded-2xl p-4 flex items-center justify-between shadow-lg">
//       {/* Song Info */}
//       <div>
//         <h3 className="text-lg font-semibold text-white">{title}</h3>
//         <p className="text-sm text-gray-400">Music Track</p>
//       </div>

//       {/* Controls */}
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={togglePlay}
//           className="w-12 h-12 rounded-full bg-[#842CF2] flex items-center justify-center text-white hover:scale-110 transition"
//         >
//           {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//         </button>
//       </div>

//       {/* Hidden Audio */}
//       <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
//     </div>
//   );
// };

// export default function App() {
//   const [activeTab, setActiveTab] = useState("Photos");

//   const tabs = ["All", "Photos", "Music"];

//   // Photos
//   const photos = [
//     {
//       id: 1,
//       src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129483/WhatsApp_Image_2025-09-29_at_13.03.37_8a4a4b00_mojjok.jpg",
//     },
//     {
//       id: 2,
//       src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129483/WhatsApp_Image_2025-09-29_at_13.03.38_0bf96731_fthnsd.jpg",
//     },
//     {
//       id: 3,
//       src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129482/WhatsApp_Image_2025-09-29_at_13.03.37_1cdd5dba_pppmj3.jpg",
//     },
//     {
//       id: 4,
//       src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129482/WhatsApp_Image_2025-09-29_at_13.03.38_22e7e08a_h0pc5o.jpg",
//     },
//     {
//       id: 5,
//       src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129482/WhatsApp_Image_2025-09-29_at_13.03.38_bde43623_hhd2eq.jpg",
//     },
//     {
//       id: 6,
//       src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129481/WhatsApp_Image_2025-09-29_at_13.03.36_80f8f9ef_drq9mi.jpg",
//     },
//   ];

//   // Music
//   const music = [
//     {
//       id: 1,
//       title: "শুধু তোমাকে -Franklin",
//       src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128626/music1_qrdmtj.mp3",
//     },
//     {
//       id: 2,
//       title: "Perfect -Ed Sheeran ",
//       src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128624/Perfect_-_Ed_Sheeran_tic473.mp3",
//     },
//     {
//       id: 3,
//       title: "Finding Her -Kushagra",
//       src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128614/Finding_Her_Kushagra_320_Kbps_rpldmo.mp3",
//     },
//     {
//       id: 4,
//       title: "ভালবাসবো রে বন্ধু -Habib Wahid",
//       src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128607/Habib_-_Bhalo_Bashbo_Bashbore_music.com.bd_o021yx.mp3",
//     },
//     {
//       id: 5,
//       title: "Timro Pratiksa -Shallum Lama",
//       src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128578/Timro-Pratiksha_wbgdc1.mp3",
//     },
//   ];

//   return (
//     <div className="relative h-screen overflow-scroll bg-gradient-to-b from-[#142131] to-[#000113] text-white mx-auto">
//       {/* Top glow */}
//       <div className="w-[200px] h-[200px] bg-[#F37261] absolute top-0 left-0 blur-3xl opacity-70"></div>
//       {/* Profile Section */}
//       <div className="absolute top-[5%] left-1/2 -translate-x-1/2 rounded-3xl flex items-center justify-center mb-6 shadow-2xl z-10">
//         <img className="rounded-xl" src={Image} alt="Profile" />
//       </div>
//       <div className="flex flex-col items-center px-6 py-8 bg-gradient-to-t from-[#2F3D59] to-[#0B1326] w-[350px] mx-auto rounded-4xl mt-[150px] relative">
//         {/* Name and Username */}
//         <div className="mt-[50px] mb-5">
//           <h1 className="text-2xl font-bold text-center">Nakhlza Akhter</h1>
//           <p className="text-gray-400 text-base text-center">@moumita</p>
//         </div>
//         {/* Social Icons */}
//         <div className="flex space-x-4 mb-5">
//           {/* Facebook */}
//           <a
//             href="https://www.facebook.com/nakhluza.akter"
//             className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center"
//           >
//             <FacebookIcon className="w-6 h-6 text-blue-500" />
//           </a>

//           {/* Instagram */}
//           <a
//             href="https://www.instagram.com/nakhluza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
//             className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center"
//           >
//             <InstagramIcon className="w-6 h-6 text-pink-500" />
//           </a>

//           {/* Lock (future use) */}
//           <a
//             href="#"
//             className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center"
//           >
//             <LockIcon className="w-6 h-6 text-red-400" />
//           </a>
//         </div>
//         {/* Tabs */}
//         <div className="flex justify-between w-[250px] mx-auto">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`text-base font-medium pb-2 relative ${
//                 activeTab === tab ? "text-white" : "text-gray-400"
//               }`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-yellow-500 rounded-full"></div>
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
//       {/* Content Grid */}
//       <div className="grid grid-cols-3 gap-2 pb-8 mt-4 px-4 relative z-10">
//         {/* Photos */}
//         {(activeTab === "Photos" || activeTab === "All") &&
//           photos.map((photo) => (
//             <img
//               key={photo.id}
//               src={photo.src}
//               alt=""
//               className="aspect-square rounded-2xl object-cover"
//             />
//           ))}

//         {/* Music */}
//         {(activeTab === "Music" || activeTab === "All") &&
//           music.map((track) => (
//             <div key={track.id} className="col-span-3">
//               <AudioPlayer title={track.title} src={track.src} />
//             </div>
//           ))}
//       </div>
//       {/* Bottom Glow */}
//       <div className="w-full h-[100px] bg-[#842CF2] absolute bottom-0 blur-3xl opacity-60"></div>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LockIcon,
  Play,
  Pause,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "../src/assets/profile.png";

// 🎵 Custom Audio Player Component
const AudioPlayer = ({ title, src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-[#1e293b] to-[#0f172a] rounded-2xl p-4 flex items-center justify-between shadow-lg"
    >
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">Music Track</p>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-[#842CF2] flex items-center justify-center text-white hover:scale-110 transition"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("Photos");

  const tabs = ["All", "Photos", "Music"];

  const photos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129483/WhatsApp_Image_2025-09-29_at_13.03.37_8a4a4b00_mojjok.jpg",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129483/WhatsApp_Image_2025-09-29_at_13.03.38_0bf96731_fthnsd.jpg",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129482/WhatsApp_Image_2025-09-29_at_13.03.37_1cdd5dba_pppmj3.jpg",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129482/WhatsApp_Image_2025-09-29_at_13.03.38_22e7e08a_h0pc5o.jpg",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129482/WhatsApp_Image_2025-09-29_at_13.03.38_bde43623_hhd2eq.jpg",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dspjhuxeu/image/upload/v1759129481/WhatsApp_Image_2025-09-29_at_13.03.36_80f8f9ef_drq9mi.jpg",
    },
  ];

  const music = [
    {
      id: 1,
      title: "শুধু তোমাকে -Franklin",
      src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128626/music1_qrdmtj.mp3",
    },
    {
      id: 2,
      title: "Perfect -Ed Sheeran ",
      src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128624/Perfect_-_Ed_Sheeran_tic473.mp3",
    },
    {
      id: 3,
      title: "Finding Her -Kushagra",
      src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128614/Finding_Her_Kushagra_320_Kbps_rpldmo.mp3",
    },
    {
      id: 4,
      title: "ভালবাসবো রে বন্ধু -Habib Wahid",
      src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128607/Habib_-_Bhalo_Bashbo_Bashbore_music.com.bd_o021yx.mp3",
    },
    {
      id: 5,
      title: "Timro Pratiksa -Shallum Lama",
      src: "https://res.cloudinary.com/dspjhuxeu/video/upload/v1759128578/Timro-Pratiksha_wbgdc1.mp3",
    },
  ];

  return (
    <div className="relative h-screen overflow-scroll bg-gradient-to-b from-[#142131] to-[#000113] text-white mx-auto">
      {/* Top glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="w-[200px] h-[200px] bg-[#F37261] absolute top-0 left-0 blur-3xl opacity-70"
      ></motion.div>

      {/* Profile */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 rounded-3xl flex items-center justify-center mb-6 shadow-2xl z-10">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: Image * 0.1 }}
          className="rounded-xl"
          src={Image}
          alt="Profile"
        />
      </div>

      <div className="flex flex-col items-center px-6 py-8 bg-gradient-to-t from-[#2F3D59] to-[#0B1326] w-[350px] mx-auto rounded-4xl mt-[150px] relative">
        <div className="mt-[50px] mb-5">
          <h1 className="text-2xl font-bold text-center">Nakhlza Akhter</h1>
          <p className="text-gray-400 text-base text-center">@moumita</p>
        </div>

        <div className="flex space-x-4 mb-5">
          <a
            href="https://www.facebook.com/nakhluza.akter"
            className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center"
          >
            <FacebookIcon className="w-6 h-6 text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/nakhluza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center"
          >
            <InstagramIcon className="w-6 h-6 text-pink-500" />
          </a>
          <a
            href="http://localhost:3033/"
            className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center"
          >
            <LockIcon className="w-6 h-6 text-red-400" />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex justify-between w-[250px] mx-auto">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.95 }}
              className={`text-base font-medium pb-2 relative ${
                activeTab === tab ? "text-white" : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-yellow-500 rounded-full"></div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-2 pb-8 mt-4 px-4 relative z-10">
        {(activeTab === "Photos" || activeTab === "All") &&
          photos.map((photo) => (
            <motion.img
              key={photo.id}
              src={photo.src}
              alt=""
              className="aspect-square rounded-2xl object-cover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: photo.id * 0.1 }}
            />
          ))}

        {(activeTab === "Music" || activeTab === "All") &&
          music.map((track) => (
            <div key={track.id} className="col-span-3">
              <AudioPlayer title={track.title} src={track.src} />
            </div>
          ))}
      </div>

      {/* Bottom Glow */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="w-full h-[100px] bg-[#842CF2] absolute bottom-0 blur-3xl opacity-60"
      ></motion.div>
    </div>
  );
}

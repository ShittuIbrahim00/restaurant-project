import { useState } from "react";
import heroVideo from "../assets/spicyhunt-intro-bg-video.mp4"

const ResponsiveVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    const video = document.getElementById("hero-video");
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <video
        id="hero-video"
        className="w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={togglePlayback}
          className="border bg-opacity-80 hover:bg-opacity-100 transition-all rounded-full px-5 py-6 shadow-xl"
        >
          <span className="text-white text-md font-normal font-merienda">
            {isPlaying ? "Pause" : "Play"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ResponsiveVideo;

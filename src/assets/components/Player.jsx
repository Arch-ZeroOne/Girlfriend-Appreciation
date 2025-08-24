import React from "react";
import Music from "../../music/music.mp3";

function Player() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="max-w-md mx-auto mt-12 p-6 rounded-3xl shadow-2xl bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 text-white text-center">
        <h2 className="text-xl font-bold mb-4 tracking-wide">
          💖 No.1 Party Anthem
        </h2>
        <audio
          src={Music}
          controls
          className="w-full rounded-full bg-white/30 backdrop-blur-md p-3 shadow-inner"
        />
      </div>
    </div>
  );
}

export default Player;

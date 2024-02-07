import React from 'react';
import colombia from "../../Img/colombia.mp4";

const VideoModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-3/4 h-3/4">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl z-10">&#10005;</button>
        <video
          src={colombia}
          title="Video de introducción"
          className="w-full h-full"
          controls
          autoPlay
          allowFullScreen
        ></video>
      </div>
    </div>
  );
};

export default VideoModal;

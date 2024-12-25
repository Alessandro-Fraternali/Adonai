import React from "react";

interface StreamerProps {
  link: string;
}

const Streamer: React.FC<StreamerProps> = ({ link }) => {
  return (
    <iframe
      width="100%"
      height="315"
      src={link}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Streamer;

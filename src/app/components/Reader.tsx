"use client";
import React from "react";

interface ReaderProps {
  document: string;
}

const Reader: React.FC<ReaderProps> = ({ document }) => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "auto" }}>
      <h1>Visualizza PDF</h1>
      <iframe
        src={document}
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default Reader;
"use client";

import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Streamer from "./Streamer";

interface CarouselSideProps {
  images?: Array<string>;
}

const CarouselSide: React.FC<CarouselSideProps> = ({ images }) => {
  const items = images?.map((image, index) => {
    const isYouTubeLink =
      image.includes("youtube.com") || image.includes("youtu.be");

    return (
      <div
        className="item"
        key={index}
        style={{ width: "100%", aspectRatio: 1 / 1 }}
      >
        {isYouTubeLink ? (
          <Streamer link={image} />
        ) : (
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            style={{
              objectFit: "contain",
              top: 0,
              left: 0,
            }}
          />
        )}
      </div>
    );
  });

  return (
    <Box sx={{ width: "100%" }}>
      <AliceCarousel
        items={items}
        autoPlay={false}
        autoPlayInterval={3000}
        infinite
      />
    </Box>
  );
};

export default CarouselSide;

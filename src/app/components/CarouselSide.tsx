"use client";

import { Box } from "@mui/material";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface CarouselSideProps {
  images?: Array<string>;
}

const CarouselSide: React.FC<CarouselSideProps> = ({ images }) => {
  const items = images?.map((image, index) => (
    <div
      className="item"
      key={index}
      style={{ width: "100%", aspectRatio: 1 / 1 }}
    >
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
      />
    </div>
  ));

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

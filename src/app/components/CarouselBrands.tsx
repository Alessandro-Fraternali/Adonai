"use client";

import { Box } from "@mui/material";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Static array of images
const staticImages = [
  "/images/venom.jpg",
  "/images/vader.jpg",
  "/images/grimmjow.jpg",
  "/images/bewd.jpg",
  "/images/blastoise.jpg",
  "/images/mentor.jpg",
  "/images/bwgf.jpg",
];

const CarouselBrands: React.FC = () => {
  const items = staticImages.map((image, index) => (
    <div
      className="item"
      key={index}
      style={{ width: "100%", height: "200px" }}
    >
      <img
        src={image}
        alt={`Brand ${index + 1}`}
        style={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  ));

  // Define responsive settings for multiple slides
  const responsive = {
    0: { items: 1 }, // 1 item for small screens
    768: { items: 2 }, // 2 items for medium screens
    1024: { items: 4 }, // 3 items for large screens
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AliceCarousel
        items={items}
        responsive={responsive}
        infinite
        autoPlay
        autoPlayInterval={750}
        mouseTracking
        renderDotsItem={() => null}
        renderPrevButton={() => null}
        renderNextButton={() => null}
      />
    </Box>
  );
};

export default CarouselBrands;

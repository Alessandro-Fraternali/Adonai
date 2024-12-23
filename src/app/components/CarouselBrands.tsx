"use client";

import { Box, Link } from "@mui/material";
import React, { JSX } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useState } from "react";

interface Immagine {
  url: string;
  src: string;
  alt: string;
}

interface CarouselBrandsProps {
  images: Immagine[];
}

const CarouselBrands: React.FC<CarouselBrandsProps> = ({ images }) => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const carouselItems = images.map((image, index) => (
      <div
        className="item"
        key={index}
        style={{
          width: "380px",
          height: "100px",
          textAlign: "center",
          backgroundImage: `url(${image.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link
          href={image.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "block", height: "100%" }}
        ></Link>
      </div>
    ));
    setItems(carouselItems);
  }, [images]);

  const responsive = {
    0: { items: 1 },
    1024: { items: 5 },
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AliceCarousel
        items={items}
        responsive={responsive}
        infinite
        autoPlay
        autoPlayInterval={850}
        mouseTracking
        renderDotsItem={() => null}
        renderPrevButton={() => null}
        renderNextButton={() => null}
      />
    </Box>
  );
};

export default CarouselBrands;

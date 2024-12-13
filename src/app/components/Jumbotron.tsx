"use client";
import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

interface JumbotronProps {
  title?: string;
  description?: string;
  mobileImg?: string;
  desktopImg: string;
}

export default function Jumbotron({
  title,
  description,
  mobileImg,
  desktopImg,
}: JumbotronProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "calc(100vh - var(--header-height))",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid2 container>
        {isMobile && mobileImg ? (
          <Image
            src={mobileImg}
            alt="Wallpaper mobile"
            fill
            style={{
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        ) : (
          <Image
            src={desktopImg}
            alt="Wallpaper desktop"
            fill
            style={{
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        )}
      </Grid2>
      {title || description ? (
        <Grid2
          container
          sx={{
            backgroundColor: "rgba(128, 128, 128, 0.8)",
            maxWidth: { xs: "80%", md: "40%" },
            position: "absolute",
            left: "50px",
            bottom: { xs: "5%", md: "30%" },
            padding: "20px",
          }}
          size={{ xs: 10, md: 5 }}
        >
          <Grid2>
            {title && (
              <Typography variant="h3" component="h1" sx={{ color: "white" }}>
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="body1" component="p" sx={{ color: "white" }}>
                {description}
              </Typography>
            )}
          </Grid2>
        </Grid2>
      ) : null}
    </Box>
  );
}

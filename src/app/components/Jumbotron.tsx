"use client";
import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Jumbotron() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Imposta il valore iniziale
    handleResize();

    // Aggiungi l'event listener per il resize
    window.addEventListener("resize", handleResize);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "calc(100vh - var(--header-height))",
        width: "100vw",
        backgroundColor: "coral",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* xs image */}
      <Grid2 container>
        {isMobile ? (
          <Image
            src="/images/blastoise.jpg"
            alt="Wallpaper ODST"
            layout="fill"
            objectFit="fill"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        ) : (
          <Image
            src="/images/wallpaperODST.jpg"
            alt="Wallpaper ODST"
            layout="fill"
            objectFit="fill"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        )}
      </Grid2>
      <Grid2
        container
        sx={{
          backgroundColor: "rgba(128, 128, 128, 0.8)",
          maxWidth: { xs: "80%", md: "40%" },
          position: "absolute",
          left: "50px",
          top: "40%",
          padding: "20px",
        }}
        size={{ xs: 10, md: 5 }}
      >
        <Grid2>
          <Typography variant="h3" component="h1" sx={{ color: "white" }}>
            Welcome to the ODST
          </Typography>
          <Typography variant="body1" component="p" sx={{ color: "white" }}>
            The ODSTs are one of the primary Special Operations units of the
            United Nations Space Command, and is under the supervision of Naval
            Special Warfare Command.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}

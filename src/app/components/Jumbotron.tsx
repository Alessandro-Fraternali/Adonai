import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";

export default function Jumbotron() {
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
      {/* <Box
        sx={{
          backgroundColor: "rgba(128, 128, 128, 0.8)",
          maxWidth: "40%",
          position: "absolute",
          left: "50px",
          top: "40%",
          padding: "20px",
        }}
      > */}
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
      {/* </Box> */}
    </Box>
  );
}

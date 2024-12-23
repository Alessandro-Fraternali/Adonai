import { Box, Grid2, Typography } from "@mui/material";
import CarouselBrands from "../components/CarouselBrands";
import sostenitori from "../texts/sostenitori.json";
import Image from "next/image";
import Description from "../components/Description";

type Sostenitore = {
  url: string;
  src: string;
  alt: string;
};

type Sostenitori = Sostenitore[];

interface SostenitoriData {
  title: string;
  description: string;
  ringraziamenti: string;
  ringraziamenti_img: string;
  sostenitori: Sostenitori;
}

const sostenitoriData: SostenitoriData = sostenitori;

export default function Sostenitori() {
  return (
    <Box>
      <Description text={sostenitoriData.description} />
      <CarouselBrands images={sostenitoriData.sostenitori} />
      <Box
        sx={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Grid2 container flexDirection={"column"}>
          <Grid2 margin={"auto"} size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" marginBottom={3}>
              {sostenitoriData.ringraziamenti}
            </Typography>
          </Grid2>
          <Grid2
            margin={"auto"}
            size={{ xs: 12, md: 6 }}
            sx={{ position: "relative", height: "300px" }} // Set a specific height for the container
          >
            <Image
              src={sostenitoriData.ringraziamenti_img}
              alt={sostenitoriData.ringraziamenti}
              layout="fill" // Allows the image to fill the container
              objectFit="cover" // Ensures the image covers the container
              style={{
                top: 0,
                left: 0,
              }}
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

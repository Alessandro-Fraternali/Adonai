import { Box, Grid2, Typography } from "@mui/material";
import CarouselBrands from "../components/CarouselBrands";
import collaboratori from "../texts/collaboratori.json";
import Image from "next/image";
import Description from "../components/Description";

type Collaboratore = {
  url: string;
  src: string;
  alt: string;
};

type Collaboratori = Collaboratore[];

interface CollaboratoriData {
  title: string;
  description: string;
  ringraziamenti: string;
  ringraziamenti_img: string;
  collaboratori: Collaboratori;
}

const collaboratoriData: CollaboratoriData = collaboratori;

export default function Collaboratori() {
  return (
    <Box>
      <Description text={collaboratoriData.description} />
      <CarouselBrands images={collaboratoriData.collaboratori} />
      <Box
        sx={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Grid2 container flexDirection={"column"}>
          <Grid2 margin={"auto"} size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" marginBottom={3}>
              {collaboratoriData.ringraziamenti}
            </Typography>
          </Grid2>
          <Grid2
            margin={"auto"}
            size={{ xs: 12, md: 6 }}
            sx={{ position: "relative", height: "300px" }} // Set a specific height for the container
          >
            <Image
              src={collaboratoriData.ringraziamenti_img}
              alt={collaboratoriData.ringraziamenti}
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

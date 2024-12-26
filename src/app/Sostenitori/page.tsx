import { Box } from "@mui/material";
import CarouselBrands from "../components/CarouselBrands";
import sostenitori from "../texts/sostenitori.json";
import Porygon from "../components/Porygon";

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
  ringraziamenti_img: string[];
  sostenitori: Sostenitori;
}

const sostenitoriData: SostenitoriData = sostenitori;

export default function Sostenitori() {
  return (
    <Box>
      <br />
      <br />
      <Porygon
        title={sostenitoriData.title}
        description={sostenitoriData.description}
        gallery={sostenitoriData.ringraziamenti_img}
      />
      <br />
      <CarouselBrands images={sostenitoriData.sostenitori} />
    </Box>
  );
}

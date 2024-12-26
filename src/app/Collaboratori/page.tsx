import { Box } from "@mui/material";
import CarouselBrands from "../components/CarouselBrands";
import collaboratori from "../texts/collaboratori.json";
import Porygon from "../components/Porygon";

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
  ringraziamenti_img: string[];
  collaboratori: Collaboratori;
}

const collaboratoriData: CollaboratoriData = collaboratori;

export default function Collaboratori() {
  return (
    <Box>
      <br />
      <br />
      <Porygon
        title={collaboratoriData.title}
        description={collaboratoriData.description}
        gallery={collaboratoriData.ringraziamenti_img}
      />
      <br />
      <CarouselBrands images={collaboratoriData.collaboratori} />
    </Box>
  );
}

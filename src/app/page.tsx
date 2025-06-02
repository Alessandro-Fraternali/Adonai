import { Box } from "@mui/material";
import Jumbotron from "./components/Jumbotron";
import homepage from "./texts/homepage.json";
import Porygon from "./components/Porygon";
import Triplet from "./components/Triplet";

type Valore = {
  title: string;
  description: string;
  image: string;
};

interface ButtonProps {
  text: string;
  link: string;
}

interface DDR {
  title: string;
  description: string;
  gallery?: Array<string>;
  galleryLeft: boolean;
  button?: ButtonProps;
}

interface HomepageData {
  jumbotron_title: string;
  jumbotron_description: string;
  amore_title: string;
  valori: Valore[];
  ddr: DDR[];
}

const homepageData: HomepageData = homepage;

export default function Home() {
  return (
    <Box>
      <Jumbotron
        title={homepage.jumbotron_title}
        description={homepage.jumbotron_description}
        mobileImg="/images/home3.png"
        desktopImg="/images/home3.png"
      />
      <Box padding={0}>
        {homepageData.ddr.map((dichiarazione, index) => (
          <Box key={index}>
            <Porygon
              title={dichiarazione.title}
              description={dichiarazione.description}
              gallery={dichiarazione.gallery}
              galleryLeft={dichiarazione.galleryLeft}
              button={dichiarazione.button}
            />
          </Box>
        ))}
        <br />
        <br />
        <Triplet items={homepageData.valori} />
      </Box>
    </Box>
  );
}

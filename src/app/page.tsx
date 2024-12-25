import { Box } from "@mui/material";
import Jumbotron from "./components/Jumbotron";
import Porygon from "./components/Porygon";
import homepage from "./texts/homepage.json";
import Reader from "./components/Reader";
import Player from "./components/Player";

export default function Home() {
  return (
    <Box>
      <Jumbotron
        title={homepage.jumbotron_title}
        description={homepage.jumbotron_description}
        mobileImg="/images/blastoise.jpg"
        desktopImg="/images/wallpaperODST.jpg"
      />
      <Box padding={3}>
        <Reader document="/emergenzaalluvione.pdf" />
        <Player />
        <Porygon
          title="ADONAI"
          description="La cucaracha"
          images={["/images/bwgf.jpg"]}
        />
      </Box>
    </Box>
  );
}

import { Box } from "@mui/material";
import Jumbotron from "./components/Jumbotron";
import Versatile from "./components/Versatile";
import homepage from "./texts/homepage.json";

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
        <Versatile
          title="ADONAI"
          description="La cucaracha"
          image="/images/bwgf.jpg"
          button="Sono il bottone"
        />
      </Box>
    </Box>
  );
}

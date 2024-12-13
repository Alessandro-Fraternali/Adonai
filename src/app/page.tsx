import { Box } from "@mui/material";
import Jumbotron from "./components/Jumbotron";
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
      <h1>Adonai</h1>
    </Box>
  );
}

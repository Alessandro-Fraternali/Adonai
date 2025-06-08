import { Box } from "@mui/material";
import missioni from "../texts/missioni.json";
import Porygon from "../components/Porygon";

interface ButtonProps {
  text: string;
  link: string;
}

type Mission = {
  title: string;
  description: string;
  gallery: string[];
  galleryLeft: boolean;
  button?: ButtonProps;
};

interface MissioniData {
  title: string;
  missioni: Mission[];
}

const missioniData: MissioniData = missioni;

export default function Missioni() {
  return (
    <>
      <Box paddingTop={10}>
        {/* <h1>{missioniData.title}</h1> */}
        {Object.entries(missioniData.missioni).map(([key, missioni]) => {
          return (
            <Box key={key}>
              <Porygon
                title={missioni.title}
                description={missioni.description}
                gallery={missioni.gallery}
                galleryLeft={missioni.galleryLeft}
                button={missioni.button}
              />
              <br />
            </Box>
          );
        })}
      </Box>
    </>
  );
}

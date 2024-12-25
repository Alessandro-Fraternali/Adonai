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
  images: string[];
  imageLeft: boolean;
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
      <Box>
        <h1>{missioniData.title}</h1>
        {Object.entries(missioniData.missioni).map(([key, missioni]) => {
          return (
            <Box key={key}>
              <Porygon
                title={missioni.title}
                description={missioni.description}
                images={missioni.images}
                imageLeft={missioni.imageLeft}
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

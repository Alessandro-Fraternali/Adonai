import { Box } from "@mui/material";
import missioni from "../texts/missioni.json";
import Porygon from "../components/Porygon";

type Mission = {
  title: string;
  description: string;
  images: Array<string>;
  imageLeft: boolean;
  button: string;
};

type Missions = {
  [key: string]: Mission;
};

interface MissioniData {
  title: string;
  missioni: Missions;
}

const missioniData: MissioniData = missioni;

export default function Missioni() {
  return (
    <>
      <Box>
        <h1>{missioniData.title}</h1>
        {Object.keys(missioniData.missioni).map((key) => {
          const missioni = missioniData.missioni[key];
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

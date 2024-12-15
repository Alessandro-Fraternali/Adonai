import { Box } from "@mui/material";
import missioni from "../texts/missioni.json";
import Porygon from "../components/Porygon";

interface Mission {
  title: string;
  description: string;
  image: string;
  imageLeft: boolean;
  button: string;
}

interface Missions {
  [key: string]: Mission;
}

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
          const initiative = missioniData.missioni[key];
          return (
            <>
              <Porygon
                key={key}
                title={initiative.title}
                description={initiative.description}
                image={initiative.image}
                imageLeft={initiative.imageLeft}
                button={initiative.button}
              />{" "}
              <br />
            </>
          );
        })}
      </Box>
    </>
  );
}

import { Box } from "@mui/material";
import Versatile from "../components/Versatile";
import missioni from "../texts/missioni.json";

interface Mission {
  title: string;
  description: string;
  image: string;
  button: string;
}

interface Missions {
  [key: string]: Mission; // This should map string keys to Mission objects
}

interface MissioniData {
  title: string;
  missioni: Missions; // This should contain a collection of missions
}

const missioniData: MissioniData = missioni; // Ensure that the structure of missioni.json matches MissioniData

export default function Missioni() {
  return (
    <>
      <Box padding={3}>
        <h1>{missioniData.title}</h1>
        {Object.keys(missioniData.missioni).map((key) => {
          const initiative = missioniData.missioni[key];
          return (
            <Versatile
              key={key}
              title={initiative.title}
              description={initiative.description}
              image={initiative.image}
              button={initiative.button}
            />
          );
        })}
      </Box>
    </>
  );
}

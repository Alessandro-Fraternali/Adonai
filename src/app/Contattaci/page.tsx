import { Box } from "@mui/material";
// import Versatile from "../components/Versatile";
import versatiletest from "../texts/versatiletest.json";
import Porygon from "../components/Porygon";

interface Mission {
  title?: string;
  description?: string;
  image?: string;
  imageLeft?: boolean;
  button?: string;
}

interface Missions {
  [key: string]: Mission;
}

interface MissioniData {
  title: string;
  versatili: Missions;
}

const missioniData: MissioniData = versatiletest;

export default function Contattaci() {
  return (
    <>
      <Box>
        <h1 style={{ marginBottom: 20 }}>{missioniData.title}</h1>
        {Object.keys(missioniData.versatili).map((key) => {
          const initiative = missioniData.versatili[key];
          return (
            <>
              <Porygon
                key={key}
                title={initiative.title}
                description={initiative.description}
                image={initiative.image}
                imageLeft={initiative.imageLeft}
                button={initiative.button}
              />
              <span
                style={{ textAlign: "center", display: "block", width: "100%" }}
              >
                <br />
                <br />
                ------ fine blocco ------
                <br />
                <br />
              </span>
            </>
          );
        })}
      </Box>
    </>
  );
}

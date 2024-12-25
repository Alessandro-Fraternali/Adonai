import { Box } from "@mui/material";
import Porygon from "../components/Porygon";
import iniziative from "../texts/iniziative.json";

interface Initiative {
  title: string;
  description: string;
  images: string[];
  imageLeft: boolean;
  button: string;
}

interface Initiatives {
  [key: string]: Initiative;
}

interface IniziativeData {
  title: string;
  iniziative: Initiative[];
}

const iniziativeData: IniziativeData = iniziative;

export default function Iniziative() {
  return (
    <>
      <Box>
        <h1>{iniziativeData.title}</h1>
        {Object.entries(iniziativeData.iniziative).map(([key, initiative]) => {
          return (
            <Box key={key}>
              <Porygon
                title={initiative.title}
                description={initiative.description}
                images={initiative.images}
                imageLeft={initiative.imageLeft}
                button={initiative.button}
              />
              <br />
            </Box>
          );
        })}
      </Box>
    </>
  );
}

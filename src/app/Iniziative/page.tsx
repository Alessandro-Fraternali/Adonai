import { Box } from "@mui/material";
import Porygon from "../components/Porygon";
import iniziative from "../texts/iniziative.json";

interface Initiative {
  title: string;
  description: string;
  images: Array<string>;
  imageLeft: boolean;
  button: string;
}

interface Initiatives {
  [key: string]: Initiative;
}

interface IniziativeData {
  title: string;
  iniziative: Initiatives;
}

const iniziativeData: IniziativeData = iniziative;

export default function Iniziative() {
  return (
    <>
      <Box>
        <h1>{iniziativeData.title}</h1>
        {Object.keys(iniziativeData.iniziative).map((key) => {
          const initiative = iniziativeData.iniziative[key];
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

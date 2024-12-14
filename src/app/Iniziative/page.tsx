import { Box } from "@mui/material";
import Versatile from "../components/Versatile";
import iniziative from "../texts/iniziative.json";

interface Initiative {
  title: string;
  description: string;
  image: string;
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
      <Box padding={3}>
        <h1>{iniziativeData.title}</h1>
        {Object.keys(iniziativeData.iniziative).map((key) => {
          const initiative = iniziativeData.iniziative[key];
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

import { Box } from "@mui/material";
import Porygon from "../components/Porygon";
import iniziative from "../texts/iniziative.json";
interface ButtonProps {
  text: string;
  link: string;
}
interface Initiative {
  title: string;
  description: string;
  gallery: string[];
  galleryLeft: boolean;
  button?: ButtonProps;
}

interface IniziativeData {
  title: string;
  iniziative: Initiative[];
}

const iniziativeData: IniziativeData = iniziative;

export default function Iniziative() {
  return (
    <>
      <Box paddingTop={10}>
        {/* <h1>{iniziativeData.title}</h1> */}
        {Object.entries(iniziativeData.iniziative).map(([key, initiative]) => {
          return (
            <Box key={key}>
              <Porygon
                title={initiative.title}
                description={initiative.description}
                gallery={initiative.gallery}
                galleryLeft={initiative.galleryLeft}
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

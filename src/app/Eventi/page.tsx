import { Box, Typography } from "@mui/material";
import Porygon from "../components/Porygon";
import eventi from "../texts/eventi.json";

interface ButtonProps {
  text: string;
  link: string;
}
interface Evento {
  title: string;
  description: string;
  gallery?: Array<string>;
  galleryLeft: boolean;
  button?: ButtonProps;
}

interface EventiAnno {
  title: string;
  eventiAnnuali: Evento[];
}

interface Eventi {
  title: string;
  eventi: {
    [key: string]: EventiAnno;
  };
}

const eventiData = eventi as Eventi;

export default function Eventi() {
  return (
    <>
      <Box>
        <Typography variant="h1">{eventiData.title}</Typography>
        {Object.entries(eventiData.eventi).map(([annoKey, annoValue]) => (
          <Box key={annoKey} marginBottom={3}>
            <Typography variant="h2">{annoValue.title}</Typography>
            {annoValue.eventiAnnuali.map((evento, index) => (
              <Porygon
                key={index}
                title={evento.title}
                description={evento.description}
                gallery={evento.gallery}
                galleryLeft={evento.galleryLeft}
                button={evento.button}
              />
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
}

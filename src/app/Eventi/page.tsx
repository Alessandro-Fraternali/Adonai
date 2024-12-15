import { Box, Typography } from "@mui/material";
import Porygon from "../components/Porygon";
import eventi from "../texts/eventi.json";

interface Evento {
  title: string;
  description: string;
  image: string;
  button: string;
}

interface EventiAnno {
  title: string;
  [key: string]: Evento | string;
}

interface Eventi {
  title: string;
  eventi: {
    [key: string]: EventiAnno;
  };
}

const eventiData = eventi as Eventi;

export default function Missioni() {
  return (
    <>
      <Box>
        <Typography variant="h1">{eventiData.title}</Typography>
        {Object.entries(eventiData.eventi).map(([annoKey, annoValue]) => (
          <Box key={annoKey} marginBottom={3}>
            <Typography variant="h2">{annoValue.title}</Typography>
            {Object.entries(annoValue).map(([eventoKey, eventoValue]) => {
              if (eventoKey === "title") return null;
              const evento = eventoValue as Evento;
              return (
                <>
                  <Porygon
                    key={eventoKey}
                    // title={evento.title}
                    description={evento.description}
                    image={evento.image}
                    button={evento.button}
                  />{" "}
                  <br />
                </>
              );
            })}
          </Box>
        ))}
      </Box>
    </>
  );
}

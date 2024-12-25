import { Box } from "@mui/material";
import versatili from "../texts/versatiletest.json";
import Porygon from "../components/Porygon";

interface ButtonProps {
  text?: string;
  link?: string;
}

type Versatile = {
  title?: string;
  description?: string;
  gallery?: string[];
  galleryLeft?: boolean;
  button?: ButtonProps;
};

interface VersatiliData {
  title: string;
  versatili: Versatile[];
}

const versatiliData: VersatiliData = versatili;

export default function Contattaci() {
  return (
    <>
      <Box>
        <h1>{versatiliData.title}</h1>
        {Object.entries(versatiliData.versatili).map(([key, versatili]) => {
          return (
            <Box key={key}>
              <Porygon
                title={versatili.title}
                description={versatili.description}
                gallery={versatili.gallery}
                galleryLeft={versatili.galleryLeft}
                button={versatili.button}
              />
              <br />
            </Box>
          );
        })}
      </Box>
    </>
  );
}

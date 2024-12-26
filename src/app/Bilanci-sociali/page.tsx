import { Box, Grid2 } from "@mui/material";
import Reader from "../components/Reader";
import bilanciData from "../texts/bilanci.json";

export default function Bilanci() {
  return (
    <>
      <h1>{bilanciData.title}</h1>
      <p>{bilanciData.description}</p>
      <Box width={"90%"} margin={"auto"}>
        {bilanciData.documents.map((document, index) => (
          <Grid2 key={index} size={{ xs: 12 }}>
            <h2>{document.title}</h2>
            <Reader document={document.path} />{" "}
          </Grid2>
        ))}
      </Box>
    </>
  );
}

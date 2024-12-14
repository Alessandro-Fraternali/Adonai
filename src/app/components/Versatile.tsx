"use client";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface VersatileProps {
  title?: string;
  description?: string;
  image?: string;
  button?: string;
}

export default function Versatile({
  title,
  description,
  image,
  button,
}: VersatileProps) {
  return (
    <Box>
      <Grid2
        size={12}
        bgcolor={"coral"}
        textAlign={"center"}
        mb={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {title ? (
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
        ) : null}
        {description ? <ReactMarkdown>{description}</ReactMarkdown> : null}
        {image ? (
          <Box
            sx={{
              width: "100%",
              minHeight: "380px", // Imposta un'altezza fissa o un'altezza minima
              position: "relative",
              overflow: "hidden",
              margin: "auto",
            }}
          >
            <Image
              src={image}
              alt="Associazione ADONAI"
              fill
              style={{
                objectFit: "contain", // Usa "contain" per garantire che l'immagine sia completamente visibile
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </Box>
        ) : null}
        {button ? <Button variant="outlined">{button}</Button> : null}
      </Grid2>
    </Box>
  );
}

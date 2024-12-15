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
    <Grid2
      size={12}
      bgcolor={"coral"}
      textAlign={"center"}
      mb={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
    >
      {title ? (
        <Box mb={0}>
          <Typography variant="h4" component="h2" mb={0}>
            {title}
          </Typography>
        </Box>
      ) : null}
      {description ? (
        <Box mb={0}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </Box>
      ) : null}
      {image ? (
        <Box
          sx={{
            width: "100%",
            minHeight: "380px",
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
              objectFit: "contain",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </Box>
      ) : null}
      {button ? (
        <Box bgcolor={"gray"}>
          <Button variant="contained">{button}</Button>
        </Box>
      ) : null}
    </Grid2>
  );
}

import { Box, Button, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface PorygonProps {
  title?: string;
  description?: string;
  image?: string;
  button?: string;
}

export default function Porygon({
  title,
  description,
  image,
  button,
}: PorygonProps) {
  return (
    <Box sx={{ flexGrow: 1, width: "90%", margin: "auto" }}>
      <Grid2 container spacing={2}>
        {title ? (
          <Grid2 bgcolor={"rgba(255, 0, 0, 0.2)"} size={{ xs: 12 }}>
            <Typography
              variant="h4"
              component="h2"
              textAlign={description ? "left" : "center"}
            >
              {title}
            </Typography>
          </Grid2>
        ) : null}
        {description || button ? (
          <Grid2
            bgcolor={"rgba(128, 128, 128, 0.2)"}
            size={{ xs: 12, md: image ? 8 : 12 }}
          >
            {description ? (
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                      {children}
                    </Typography>
                  ),
                }}
              >
                {description}
              </ReactMarkdown>
            ) : null}
            {button && (!image || description) ? (
              <Grid2
                textAlign={{
                  xs: "center",
                  md: !image && description ? "center" : "left",
                }}
                marginLeft={!image && description ? 0 : 3}
                marginTop={description ? 3 : 0}
              >
                <Button variant="contained">{button}</Button>
              </Grid2>
            ) : null}
          </Grid2>
        ) : null}
        {image ? (
          <Grid2
            bgcolor={"rgba(0, 128, 0, 0.2)"}
            size={{ xs: 12, md: description ? 4 : 12 }}
          >
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
          </Grid2>
        ) : null}
        {button && image && !description ? (
          <Grid2
            bgcolor={"rgba(255, 255, 0, 0.2)"}
            size={{ xs: 12 }}
            display={"flex"}
            justifyContent={"center"}
            marginTop={3}
          >
            <Button variant="contained">{button}</Button>
          </Grid2>
        ) : null}
      </Grid2>
    </Box>
  );
}

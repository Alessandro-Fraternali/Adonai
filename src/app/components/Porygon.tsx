import { Box, Button, Grid2, Link, Typography } from "@mui/material";
import Image from "next/image";
import CarouselSide from "./CarouselSide";
import Description from "./Description";
import Player from "./Player";

interface ButtonProps {
  text: string;
  link: string;
}
interface PorygonProps {
  title?: string;
  description?: string;
  images?: Array<string>;
  video?: string;
  button?: ButtonProps;
  imageLeft?: boolean;
}

export default function Porygon({
  title,
  description,
  images,
  video,
  button,
  imageLeft,
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
        {description || button || images ? (
          <Grid2
            size={{ xs: 12 }}
            gap={2}
            display={"flex"}
            sx={{
              flexDirection: {
                xs: "column",
                md: imageLeft ? "row-reverse" : "row",
              },
            }}
          >
            {description ? (
              <Grid2
                bgcolor={"rgba(128, 128, 128, 0.2)"}
                size={{ xs: 12, md: images ? 7 : 12 }}
              >
                {description ? <Description text={description} /> : null}
                {button && (!images || description) ? (
                  <Grid2
                    textAlign={{
                      xs: "center",
                      md: !images && description ? "center" : "left",
                    }}
                    marginLeft={!images && description ? 0 : 5}
                    marginTop={description ? 3 : 0}
                  >
                    <Button variant="contained">
                      <Link href={button.link} target="_blank">
                        {button.text}
                      </Link>
                    </Button>
                  </Grid2>
                ) : null}
              </Grid2>
            ) : null}
            {images ? (
              <Grid2
                bgcolor={"rgba(0, 128, 0, 0.07)"}
                size={{ xs: 12, md: description ? 5 : 12 }}
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
                  {images.length === 1 ? (
                    <Image
                      src={images[0]}
                      alt="Associazione ADONAI"
                      fill
                      style={{
                        objectFit: "contain",
                        top: 0,
                        left: 0,
                      }}
                    />
                  ) : (
                    <CarouselSide images={images} />
                  )}
                </Box>
              </Grid2>
            ) : null}
            {video ? (
              <Grid2
                bgcolor={"rgba(0, 128, 0, 0.07)"}
                size={{ xs: 12, md: description ? 5 : 12 }}
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
                  <Player />
                </Box>
              </Grid2>
            ) : null}
          </Grid2>
        ) : null}
        {button && images && !description ? (
          <Grid2
            bgcolor={"rgba(255, 255, 0, 0.2)"}
            size={{ xs: 12 }}
            display={"flex"}
            justifyContent={"center"}
            marginTop={3}
          >
            <Link href={button.link} target="_blank" color="error">
              {button.text}
            </Link>
          </Grid2>
        ) : null}
      </Grid2>
    </Box>
  );
}

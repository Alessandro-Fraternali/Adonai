import { Box, Button, Grid2, Link, Typography } from "@mui/material";
import Image from "next/image";
import CarouselSide from "./CarouselSide";
import Description from "./Description";
import Streamer from "./Streamer";

interface ButtonProps {
  text?: string;
  link?: string;
}
interface PorygonProps {
  title?: string;
  description?: string;
  gallery?: Array<string>;
  button?: ButtonProps;
  galleryLeft?: boolean;
}

export default function Porygon({
  title,
  description,
  gallery,
  button,
  galleryLeft,
}: PorygonProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: {
          xs: "90%",
          md: "80%",
        },
        margin: "auto",
        marginBottom: 5,
      }}
    >
      <Grid2 container spacing={2}>
        {/* {title ? (
          <Grid2 size={{ xs: 12 }}>
            <Typography
              variant="h4"
              component="h2"
              textAlign={description ? "left" : "center"}
              fontWeight={"bold"}
            >
              {title}
            </Typography>
          </Grid2>
        ) : null} */}
        {description || button || gallery ? (
          <Grid2
            size={{ xs: 12 }}
            gap={2}
            display={"flex"}
            sx={{
              flexDirection: {
                xs: "column",
                md: galleryLeft ? "row-reverse" : "row",
              },
            }}
          >
            {description ? (
              <Grid2 size={{ xs: 12, md: gallery ? 7 : 12 }}>
                {title ? (
                  <Typography
                    variant="h4"
                    component="h2"
                    textAlign={description ? "left" : "center"}
                    fontWeight={"bold"}
                  >
                    {title}
                  </Typography>
                ) : null}
                {description ? <Description text={description} /> : null}
                {button && (!gallery || description) ? (
                  <Grid2
                    textAlign={{
                      xs: "center",
                      md: !gallery && description ? "center" : "left",
                    }}
                    marginLeft={{ xs: 0, md: !gallery && description ? 0 : 5 }}
                    marginTop={description ? 3 : 0}
                  >
                    <Button variant="contained">
                      <Link
                        href={button.link}
                        target="_blank"
                        color="#ffffff"
                        sx={{ textDecoration: "none" }}
                      >
                        {button.text}
                      </Link>
                    </Button>
                  </Grid2>
                ) : null}
              </Grid2>
            ) : null}
            {gallery ? (
              <Grid2 size={{ xs: 12, md: description ? 5 : 12 }}>
                <Box
                  sx={{
                    width: "100%",
                    minHeight: "380px",
                    position: "relative",
                    overflow: "hidden",
                    margin: "auto",
                  }}
                >
                  {gallery.length === 1 ? (
                    gallery[0].includes("youtube.") ? (
                      <Streamer link={gallery[0]} />
                    ) : (
                      <Image
                        src={gallery[0]}
                        alt="Associazione ADONAI"
                        fill
                        style={{
                          objectFit: "scale-down",
                          objectPosition: "right",
                        }}
                      />
                    )
                  ) : (
                    <CarouselSide images={gallery} />
                  )}
                </Box>
              </Grid2>
            ) : null}
          </Grid2>
        ) : null}
        {button && gallery && !description ? (
          <Grid2
            size={{ xs: 12 }}
            display={"flex"}
            justifyContent={"center"}
            marginTop={3}
            marginLeft={0}
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

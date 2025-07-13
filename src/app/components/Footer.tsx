import { Box, Link as MuiLink, Grid2, Link } from "@mui/material";
import Image from "next/image";
import footer from "../texts/footer.json";
import Description from "./Description";
import { iconMap } from "../utils/iconMap";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          width: "100%",
          background: "linear-gradient(to right, #4E54BF, #8096E9)",
          color: "#f0f0f0",
        }}
      >
        <Box
          padding={{ xs: "10px", md: "80px" }}
          paddingTop={"40px"}
          paddingBottom={"20px"}
        >
          <Box marginBottom={2}></Box>

          <Grid2
            container
            spacing={2}
            // flexDirection={{ xs: "column-reverse", md: "row" }}
          >
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Description text={footer.info} />
              <Description text={footer.iban} />
              <Box style={{ marginTop: "-20px" }}>
                <Description text={footer.fiscal_code} />
              </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              {footer.contacts.map((contact) => {
                const icon = iconMap[contact.icon?.toLowerCase()] || null;

                return (
                  <MuiLink
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1rem",
                      padding: 2,
                      color: "inherit",
                      textDecoration: "none",
                      fontFamily: "'Open Sans', sans-serif",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {icon}
                    <Box component="span" sx={{ marginLeft: 1 }}>
                      <h3>{contact.title}</h3>
                      {contact.label}
                    </Box>
                  </MuiLink>
                );
              })}
              <Grid2
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-start" }}
                paddingBottom={{ xs: 2, md: 0 }}
                paddingLeft={{ xs: 0, md: 6 }}
                paddingTop={2}
              >
                <Grid2>
                  <h3 style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Seguici sui social
                  </h3>
                  <Grid2 display={"flex"} gap={4} marginTop={2}>
                    {footer.socials.map((social) => {
                      const icon = iconMap[social.icon?.toLowerCase()] || null;

                      return (
                        <MuiLink
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "1.1rem",
                            padding: 0.5,
                            color: "inherit",
                            textDecoration: "none",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {icon}
                        </MuiLink>
                      );
                    })}
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 2 }}
              textAlign={"center"}
              display={{ xs: "none", md: "block" }}
            >
              <Image
                src={footer.logo_src}
                alt={footer.logo_alt}
                width={200}
                height={200}
              />
            </Grid2>
          </Grid2>
        </Box>
      </footer>
      <Box
        sx={{
          backgroundColor: "#161616",
          color: "coral",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: 7, md: 4 },
          fontSize: { xs: 20, md: 18 },
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#ff4d00",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.1rem",
          }}
        >
          Progettato e sviluppato da{" "}
          <Link
            style={{
              color: "#ff4d00",
              textDecoration: "underline",
              textDecorationColor: "#ff4d00",
            }}
            target="_blank"
            href={footer.portfolio}
          >
            Alessandro Fraternali
          </Link>{" "}
          a titolo gratuito per Casa Famiglia Adonai
        </p>
      </Box>
    </>
  );
}

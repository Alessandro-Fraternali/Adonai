import { Box, Grid2, Link as MuiLink, Paper } from "@mui/material";
import contattaci from "../texts/contattaci.json";
import footer from "../texts/footer.json";
import Description from "../components/Description";
import { iconMap } from "../utils/iconMap";
import ContactForm from "../components/ContactForm";

export default function Contattaci() {
  return (
    <>
      <Box paddingTop={5} marginBottom={10}>
        <Grid2 textAlign={"center"}>
          <h1>{contattaci.title}</h1>
          <Description text={contattaci.description} />
        </Grid2>

        <Grid2
          container
          paddingTop={5}
          display={"flex"}
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Grid2 size={{ xs: 12, md: 8 }}>
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
                      fontSize: "1.1rem",
                      padding: 4,
                      color: "inherit",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {icon}
                    <Box component="span" sx={{ marginLeft: 4 }}>
                      <h3>{contact.title}</h3>
                      {contact.label}
                    </Box>
                  </MuiLink>
                );
              })}
              <Grid2 paddingLeft={10}>
                <Box component="span" sx={{ marginLeft: 4 }}>
                  <h3>Seguici sui social</h3>
                </Box>
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
          <Grid2 size={{ xs: 12, md: 6 }} display={"flex"}>
            <Paper
              sx={{
                padding: 2,
                borderRadius: 2,
                // background: "linear-gradient(to right, #4E54BF, #8096E9)",
              }}
              elevation={6}
            >
              <ContactForm />
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

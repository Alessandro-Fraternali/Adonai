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

        <Grid2 container paddingTop={5} display={"flex"}>
          <Grid2
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Grid2 size={8}>
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
                    <Box component="span" sx={{ marginLeft: 1 }}>
                      {contact.label}
                    </Box>
                  </MuiLink>
                );
              })}
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

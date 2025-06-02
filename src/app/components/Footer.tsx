import { Box, Link as MuiLink, Typography, Grid2 } from "@mui/material";
import Image from "next/image";
import footer from "../texts/footer.json";
import Description from "./Description";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          width: "100%",
          background: "linear-gradient(to right, #4E54BF, #8096E9)",
          color: "white",
        }}
      >
        <Box
          padding={{ xs: "10px", md: "100px" }}
          paddingTop={"40px"}
          paddingBottom={"20px"}
        >
          <Box marginBottom={2}></Box>

          <Grid2
            container
            spacing={2}
            flexDirection={{ xs: "column-reverse", md: "row" }}
          >
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Description text={footer.info} />
              <Description text={footer.iban} />
              <Box style={{ marginTop: "-20px" }}>
                <Description text={footer.fiscal_code} />
              </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              {footer.contacts.map((contact) =>
                contact.href ? (
                  <MuiLink
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "block",
                      fontSize: "1.1rem",
                      padding: 2,
                      color: "inherit",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {contact.label}
                  </MuiLink>
                ) : (
                  <Description key={contact.label} text={contact.label} />
                )
              )}
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }} textAlign={"center"}>
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
          backgroundColor: "black",
          color: "coral",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">{footer.credits}</Typography>
      </Box>
    </>
  );
}

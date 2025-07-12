"use client";
import Link from "next/link";
import links from "../texts/links.json";
import Image from "next/image";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header
      style={{
        width: "100vw",
        height: "var(--header-height)",
        background: "linear-gradient(to right, #4E54BF, #8096E9)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          paddingLeft: "20px",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/images/logot.png"
            alt="Associazione ADONAI"
            width={195}
            height={60}
          />
        </Link>

        {/* Desktop navigation */}
        {!isMobile && (
          <Box
            sx={{
              width: "45%",
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "30px",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ color: "#f0f0f0", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        )}

        {/* Mobile menu icon */}
        {isMobile && (
          <IconButton sx={{ color: "white", marginRight: "20px" }}>
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Box>
    </header>
  );
}

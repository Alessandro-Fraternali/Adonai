"use client";
import Link from "next/link";
import links from "../texts/links.json";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header
      style={{
        width: "100vw",
        height: "var(--header-height)",
        background: "linear-gradient(to right, #4E54BF, #8096E9)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 91,
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
        <Link
          href="/"
          onClick={handleLogoClick}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image
            src="/images/logot.png"
            alt="Associazione ADONAI"
            width={195}
            height={60}
          />
        </Link>

        {!isMobile && (
          <Box
            sx={{
              width: "70%",
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px",
              paddingRight: "60px",
              textTransform: "uppercase",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: "#f0f0f0",
                  textDecoration: "none",
                  fontFamily: "'Open Sans', sans-serif",
                  letterSpacing: 0.5,
                  // fontFamily: "'Roboto', sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        )}

        {isMobile && <MobileMenu open={menuOpen} setOpen={setMenuOpen} />}
      </Box>
    </header>
  );
}

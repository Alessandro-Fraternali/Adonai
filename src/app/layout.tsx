import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <main
            style={{ flex: 1, maxWidth: "100vw", backgroundColor: "lightgray" }}
          >
            {children}
          </main>
          <Footer />
        </Box>
      </body>
    </html>
  );
}

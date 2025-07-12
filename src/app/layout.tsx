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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
      </head>
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
            style={{
              flex: 1,
              maxWidth: "100vw",
              backgroundColor: "#f0f0f0",
              marginTop: "var(--header-height)",
            }}
          >
            {children}
          </main>
          <Footer />
        </Box>
      </body>
    </html>
  );
}

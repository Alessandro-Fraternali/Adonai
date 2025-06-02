"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type TripletItem = {
  title: string;
  description: string;
  image: string;
};

interface TripletProps {
  items: TripletItem[];
}

export default function Triplet({ items }: TripletProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "80%",
        margin: "auto",
        marginBottom: "120px",
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: {
              xs: "100%",
              md: "32%",
            },
            marginBottom: 3,
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={200}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <Typography variant="h3" component="h1">
            {item.title}
          </Typography>
          <Typography variant="h6" component="p">
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

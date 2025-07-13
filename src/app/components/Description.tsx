import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";

interface DescriptionProps {
  text: string; // Dynamic description text
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <Typography variant="body1" sx={{ fontSize: "1rem", padding: 2 }}>
            {children}
          </Typography>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
};

export default Description;

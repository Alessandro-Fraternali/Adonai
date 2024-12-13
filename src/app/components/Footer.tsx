import { Link } from "@mui/material";
import links from "../texts/links.json";

export default function Footer() {
  return (
    <footer
      style={{
        height: "100px",
        width: "100vw",
        backgroundColor: "cornflowerblue",
        paddingLeft: "20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </footer>
  );
}

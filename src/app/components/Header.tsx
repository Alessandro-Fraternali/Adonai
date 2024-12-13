import Link from "next/link";
import links from "../texts/links.json";

export default function Header() {
  return (
    <header
      style={{
        width: "100vw",
        height: "var(--header-height)",
        backgroundColor: "#4CAF",
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
    </header>
  );
}

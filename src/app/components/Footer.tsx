import { Link } from "@mui/material";

export default function Footer() {
  return (
    <footer
      style={{
        height: "100px",
        width: "100vw",
        backgroundColor: "cornflowerblue",
        paddingLeft: "20px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Link href="/">Homepage</Link>
      <Link href="Iniziative">Iniziative</Link>
      <Link href="Eventi">Eventi</Link>
      <Link href="Emergenze">Emergenze</Link>
      <Link href="Contattaci">Contattaci</Link>
      <Link href="Collaboratori">Collaboratori</Link>
      <Link href="Bilanci-sociali">Bilanci sociali</Link>
    </footer>
  );
}

import Link from "next/link";

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
      <Link href="/">Homepage</Link>
      <Link href="Iniziative">Iniziative</Link>
      <Link href="Eventi">Eventi</Link>
      <Link href="Emergenze">Emergenze</Link>
      <Link href="Contattaci">Contattaci</Link>
      <Link href="Collaboratori">Collaboratori</Link>
      <Link href="Bilanci-sociali">Bilanci sociali</Link>
    </header>
  );
}

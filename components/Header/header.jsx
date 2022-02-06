import Link from "next/link";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-contents">
        <Link href="/">
          <a>
            <h1>Dr Joanne Paul</h1>
            <p>RENAISSANCE HISTORIAN</p>
          </a>
        </Link>
        <NavBar />
      </div>
    </header>
  );
}

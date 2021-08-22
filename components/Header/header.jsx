import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/">
        <div className="site-header-contents">
          <a>
            <h1>Dr Joanne Paul</h1>
            <p>RENAISSANCE HISTORIAN</p>
          </a>
        </div>
      </Link>
    </header>
  );
}

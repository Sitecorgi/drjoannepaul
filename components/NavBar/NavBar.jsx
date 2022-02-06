import Link from "next/link";
import React from "react";

export default function NavBar() {

  const [showNav, setShowNav] = React.useState(false);

  const clickMenu = () => showNav ? setShowNav(false) : setShowNav(true);

  return (
    <>
      <nav className="global-nav">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/publications">
          <a>PUBLICATIONS</a>
        </Link>
        <Link href="/consultancy">
          <a>CONSULTANCY</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </nav>
      <div className="mobile-menu">
        <button href="" className="icon" onClick={() => clickMenu()}>
          <i className="fa fa-bars"></i>
        </button>
      </div> 
      { showNav ? 
      <nav className="global-mobile-nav">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/publications">
          <a>PUBLICATIONS</a>
        </Link>
        <Link href="/consultancy">
          <a>CONSULTANCY</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </nav> : null }   
    </>
  );
}

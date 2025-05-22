import Link from "next/link";
import React, { useEffect, useState } from 'react';
export default function Header() {

  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const clickMenu = () => showMobileNav ? setShowMobileNav(false) : setShowMobileNav(true);

  const [showNav, setShowNav] = useState(true);
  const controlNavBar = () => {
    if(window.scrollY > 200){
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavBar)
    return () => {
      window.removeEventListener('scroll', controlNavBar)
    }
  }, [])
  
  return (
    <header className={ `transition-header ${showNav && 'site-header'}`}>
      <div className={`site-header-contents`}>
        <Link href="/">
            <h1>Dr Joanne Paul</h1>
            <p>RENAISSANCE HISTORIAN</p>
        </Link>
        <nav className="global-nav">
        <Link href="/">
          HOME
        </Link>
        <Link href="/about">
          ABOUT
        </Link>
        <Link href="/publications">
          PUBLICATIONS
        </Link>
        <Link href="/events">
          EVENTS
        </Link>
        <Link href="/consultancy">
          MEDIA &#038; CONSULTANCY
        </Link>
        <Link href="/contact">
          CONTACT
        </Link>
      </nav>
      <div className="mobile-menu">
        <button href="" className="icon" onClick={() => clickMenu()}>
        { showMobileNav ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }
        </button>
      </div>      
      </div>
      { showMobileNav ? 
      <nav className="global-mobile-nav">
        <Link href="/" onClick={() => clickMenu()}>
          HOME
        </Link>
        <Link href="/about" onClick={() => clickMenu()}>
          ABOUT
        </Link>
        <Link href="/publications" onClick={() => clickMenu()}>
          PUBLICATIONS
        </Link>
        <Link href="/events" onClick={() => clickMenu()}>
          EVENTS
        </Link>
        <Link href="/consultancy" onClick={() => clickMenu()}>
          MEDIA &#038; CONSULTANCY
        </Link>
        <Link href="/contact" onClick={() => clickMenu()}>
          CONTACT
        </Link>
      </nav> : null }
    </header>
  );
}

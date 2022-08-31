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
          <a>
            <h1>Dr Joanne Paul</h1>
            <p>RENAISSANCE HISTORIAN</p>
          </a>
        </Link>
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
        <Link href="/events">
          <a>EVENTS</a>
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
        { showMobileNav ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }
        </button>
      </div>      
      </div>
      { showMobileNav ? 
      <nav className="global-mobile-nav">
        <Link href="/" >
          <a onClick={() => clickMenu()}>HOME</a>
        </Link>
        <Link href="/about">
          <a onClick={() => clickMenu()}>ABOUT</a>
        </Link>
        <Link href="/publications">
          <a onClick={() => clickMenu()}>PUBLICATIONS</a>
        </Link>
        <Link href="/events">
          <a onClick={() => clickMenu()}>EVENTS</a>
        </Link>
        <Link href="/consultancy">
          <a onClick={() => clickMenu()}>CONSULTANCY</a>
        </Link>
        <Link href="/contact">
          <a onClick={() => clickMenu()}>CONTACT</a>
        </Link>
      </nav> : null }
    </header>
  );
}

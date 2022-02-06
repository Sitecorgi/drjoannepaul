import Link from 'next/link';

export default function NavBar() {
  
    return (
      <>
       <nav className="global-nav">
           <Link href='/'>
               <a>HOME</a>
           </Link>
           <Link href='/about'>
               <a>ABOUT</a>
           </Link>
           <Link href='/publications'>
               <a>PUBLICATIONS</a>
           </Link>
           <Link href='/consultancy'>
               <a>CONSULTANCY</a>
           </Link>
           <Link href='/contact'>
               <a>CONTACT</a>
           </Link>
       </nav>
      </>
    );
  }
  
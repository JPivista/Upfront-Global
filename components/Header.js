import React, { useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineAlignLeft } from "react-icons/ai";
import { Col, Container, Row, Button } from 'react-bootstrap'
import Seo from '../components/seo/NextSeo'
import { useRouter } from 'next/navigation';
import Offcanvas from '../components/OffCanvas';

function Header({ title, description, MetaImage }) {
  //const router = usePathname();
  const router = useRouter();
  const [currentURL, setCurrentURL] = useState('');
  //const currentURL = window.location.href;
  //const router = useRouter(); // Use the useRouter hook to access the router object
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, [router.asPath]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>
<Seo title={title} description={description} metaImage={MetaImage} path={currentURL} />
<nav class="navbar bg-body-tertiary m-line">
<div class="container-fluid up-bg">
<Link href="/" className="navbar-brand">
<Image src="/images/logo.svg"
              className="img-fluid" width="300" height="150" alt='upfront global'/>
            
</Link>
<div className="d-none d-lg-block">
      <ul className="nav nav-pills menu">
              <li className="nav-item"><Link href="/how-we-work" className={router == "/how-we-work" ? "active nav-link" : "nav-link"} >HOW WE WORK</Link></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ABOUT</a>
          <ul class="dropdown-menu">
            <li><Link  className= {router == "/why-well-being" ? "active dropdown-item" : "dropdown-item"} href="/why-well-being">WHY WORKFORCE WELL-BEING?</Link></li>
                {/* <li><Link className= {router == "/apparel-fashion-textile" ? "active dropdown-item" : "dropdown-item"} href="/apparel-fashion-textile">APPAREL, FASHION & TEXTILE</Link></li> */}
                <li><Link className= {router == "/informal-workforces" ? "active dropdown-item" : "dropdown-item"} href="/informal-workforces">OUR WORK WITH INFORMAL WORKFORCES</Link></li>
                <li><Link className= {router == "/our-team" ? "active dropdown-item" : "dropdown-item"} href="/our-team">OUR TEAM</Link></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>
        <li className="nav-item"><Link href="/our-programmes" className= {router == "/our-programmes" ? "active nav-link" : "nav-link"}>OUR PROGRAMMES</Link></li>
        <li className="nav-item"><Link href="/communityactioncollab" className= {router == "/communityactioncollab" ? "active nav-link" : "nav-link"}>COMMUNITY ACTION COLLAB</Link></li>
            <li className="nav-item"><Link href="/blog" className= {router == "/blog" ? "active nav-link" : "nav-link"}>STORIES (BLOG)</Link></li>
            <li className="nav-item"><Link href="/media-publications" className= {router == "/media-publications" ? "active nav-link" : "nav-link"}>MEDIA</Link></li>
            <li className="nav-item"><Link href="/contact" className= {router == "/contact" ? "active nav-link" : "nav-link"}>CAREERS & CONTACT</Link></li>
            </ul></div>
          
            <Offcanvas/>
  </div>
</nav> 

    </>
  )
}

export default Header

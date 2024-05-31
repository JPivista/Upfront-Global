import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineAlignLeft } from "react-icons/ai";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Example() {
    const router = useRouter(); // Use the useRouter hook to access the router object
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-block d-lg-none d-xl-none d-xxl-none">
      <Button variant="primary"  classname="btn btn-humburger" onClick={handleShow}>
      <AiOutlineAlignLeft size={30} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
              <Offcanvas.Body>
              <div className="menu-off">
        <ul className="nav nav-pills menu">
        <li className="nav-item"><Link href="/how-we-work" className= {router == "/how-we-work" ? "active nav-link" : "nav-link"} >HOW WE WORK</Link></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ABOUT
          </a>
          <ul class="dropdown-menu">
            <li><Link  className= {router == "/why-well-being" ? "active dropdown-item" : "dropdown-item"} href="/why-well-being">WHY WORKFORCE WELL-BEING?</Link></li>
                {/* <li><Link className= {router == "/apparel-fashion-textile" ? "active dropdown-item" : "dropdown-item"} href="/apparel-fashion-textile">APPAREL, FASHION & TEXTILE</Link></li> */}
                <li><Link className= {router == "/our-reach" ? "active dropdown-item" : "dropdown-item"} href="/our-reach">OUR WORK WITH INFORMAL WORKFORCES</Link></li>
                <li><Link className= {router == "/our-team" ? "active dropdown-item" : "dropdown-item"} href="/our-team">OUR TEAM</Link></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>
        <li className="nav-item"><Link href="/our-programmes" className= {router == "/our-programmes" ? "active nav-link" : "nav-link"}>OUR PROGRAMMES</Link></li>
        <li className="nav-item"><Link href="/communityactioncollab" className= {router == "/communityactioncollab" ? "active nav-link" : "nav-link"}>COMMUNITY ACTION COLLAB</Link></li>
            <li className="nav-item"><Link href="/blog" className= {router == "/blog" ? "active nav-link" : "nav-link"}>STORIES (BLOG)</Link></li>
            <li className="nav-item"><Link href="/tools-resources" className= {router == "/tools-resources" ? "active nav-link" : "nav-link"}>MEDIA</Link></li>
            <li className="nav-item"><Link href="/contact" className= {router == "/contact" ? "active nav-link" : "nav-link"}>CAREERS & CONTACT</Link></li>
      </ul></div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Example;
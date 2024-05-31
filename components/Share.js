import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { TwitterShareButton,FacebookShareButton, WhatsappShareButton  } from 'react-share';
import { AiFillTwitterSquare, AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaSquareXTwitter } from "react-icons/fa6";


function Share() {
  const pathname = usePathname()
  const murl = `https://upfront.global/${pathname}`
  return (
<>
<Container className="d-flex flex-column">
              <p>Share This Page </p>
<TwitterShareButton 
url={murl}
title="Check out this iHateReading custom repository "
className="my-1 s-button btn btn-primary px-2"
>
<FaSquareXTwitter size={25} /> Twitter                                       
</TwitterShareButton>

<FacebookShareButton 
url={murl}
          title="Check out this iHateReading custom repository "
          className="my-1 s-button btn btn-primary px-2"
>
<AiFillFacebook  size={28} /> Facebook                                     
</FacebookShareButton>              

<WhatsappShareButton 
url={murl}
          title="Check out this iHateReading custom repository "
          className="my-1 s-button btn btn-primary px-2"
>
<AiOutlineWhatsApp  size={28} /> Whatsapp                                      
</WhatsappShareButton>                      
</Container>
<Container className="d-flex flex-column mt-5 mb-5">
<p>More in This Section</p>
<Link href="/why-well-being" className="my-1 s-button">About Us</Link>                      
<Link href="/our-reach" className="my-1 s-button">Our Reach</Link>                      
{/* <Link href="/apparel-fashion-textile" className="my-1 s-button">Apparel, Fashion & Textile</Link>                       */}
<Link href="/our-reach" className="my-1 s-button">Informal Workforces</Link>                      
</Container>
      </>
  )
}

export default Share

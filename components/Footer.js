import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Image from 'next/image';
import ScrollToTop from "react-scroll-to-top";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from 'react';
import { FaInstagram } from "react-icons/fa";



function Footer() {
    const router = usePathname();
	const [date, setDate] = useState(new Date());
    return (
        <Container className="up-bg pb-2 pt-5" fluid>
            <Container className="text-center">
                <Image
                    src="/images/logo.svg"
                    width={400}
                    height={150}
                    alt='upfront global'
                />
                <p className="text-white thin pt-3">&copy; {date.getFullYear()}. All Rights Reserved.</p>
                <hr className="line"/>
            </Container>
            <Container className="m-footer">
                <Row className="d-flex justify-content-center pt-3 " >
                <Col lg={2} ><Link href="/" className= {router == "/" ? "active text-white thin" : "text-white thin"}>Home Page</Link></Col>
                    <Col lg={2}><Link href="/why-well-being" className= {router == "/why-well-being" ? "active text-white thin" : "text-white thin"}>Why Workforce Well-Being?</Link></Col>
                    <Col  lg={2}><Link href="/communityactioncollab" className= {router == "/communityactioncollab" ? "active text-white thin" : "text-white thin"}>#COVIDActionCollab</Link></Col>
                    <Col  lg={2}><Link href="/media-publications" className= {router == "/media-publications" ? "active text-white thin" : "text-white thin"}>Media</Link></Col>
                </Row>
                <Row className="d-flex justify-content-center pt-3">
                    <Col lg={2}><Link href="/how-we-work" className= {router == "/how-we-work" ? "active text-white thin" : "text-white thin"}>How We Work</Link></Col>
                    <Col  lg={2}><Link href="/our-reach" className= {router == "/our-reach" ? "active text-white thin" : "text-white thin"}>Our Reach</Link></Col>
                    <Col  lg={2}><Link href="/labour-of-love-fund" className= {router == "/labour-of-love-fund" ? "active text-white thin" : "text-white thin"}>Labour of Love Fund</Link></Col>
                    <Col lg={2}><Link href="/contact" className= {router == "/contact" ? "active text-white thin" : "text-white thin"}>Careers & Contact</Link></Col>
                </Row>
                <Row className="d-flex justify-content-center pt-3">
                    <Col lg={2}>{/* <Link href="/apparel-fashion-textile" className= {router == "/apparel-fashion-textile" ? "active text-white thin" : "text-white thin"}>Apparel, Fashion & Textile</Link> */}</Col>
                    <Col lg={2}><Link href="/blog" className= {router == "/blog" ? "active text-white thin" : "text-white thin"}>Our Stories (Blogs)</Link></Col>
                    <Col  lg={2}><Link href="/our-reach" className= {router == "/our-reach" ? "active text-white thin" : "text-white thin"}>Our Work with Informal Workforces</Link></Col>
                    <Col  lg={2}><Link href="/our-team" className= {router == "/our-team" ? "active text-white thin" : "text-white thin"}>Our Team</Link></Col>
                </Row>
            </Container>
            
            <ScrollToTop smooth />
            <Container className="text-center mt-5">
                <Link href="https://www.linkedin.com/showcase/upfrontcg/"><FaLinkedin size={30} className="f_social mx-3"/></Link>
                <Link href="https://twitter.com/UpfrontCG"><FaSquareXTwitter size={30} className="f_social"/></Link>
                <Link href="https://www.instagram.com/upfront.global/"><FaInstagram size={30} className="f_social mx-3"/></Link>
                
            </Container>
        </Container>
    )
}
    export default Footer;

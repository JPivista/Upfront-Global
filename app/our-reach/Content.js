import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillLinkedin } from "react-icons/ai";
import Link from 'next/link'
import Image from 'next/image'
import Share from '../../components/Share'

function Team() {
  return (
    <>
<Container className="pt-5">
<h1 className="fw-bold">Our Reach</h1>              
<hr className="h-line"/>              
</Container>
          <Container className="mb-5">
              <Row>
                  <Col lg={9}>
              <Image src="/images/reach.png"
                  width={800}
                          height={500}
                          alt="Our reach"
                          className="responsive" />
<Image src="/images/footprint.png"
                  width={800}
                          height={500}
                          alt="Our reach"
                          className="responsive" />
              </Col>
                  <Col>
                      <Share/>
                  </Col>
              </Row>          
</Container>
    </>
  )
}

export default Team

'use client'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'

function HeroBanner() {
  return (
    <>
<Container className="up-bg b-bottom" fluid>
<Row className="d-flex flex-row align-items-center">
<Col >
<Container className='fs-5 text-white mt-2 mb-5'>
<h1 className="fw-bold">About Us</h1>
<p className="fs-4 thin">We are a global south entity, part of the Catalyst Group of organisations, driving significant impactful sustainable solutions, particularly for front line workers and their ecosystems. We are based in India and we have worked in 11 countries.</p>
</Container>
                  </Col>
<Col className="d-flex justify-content-center mb-2 mt-2" xs={12} lg={6}>
<Image
src="/images/about_us_banner.jpeg"
width={700}
              height={500}
              className="img-fluid"
/>
</Col>
</Row>
</Container>
    </>
  )
}

export default HeroBanner

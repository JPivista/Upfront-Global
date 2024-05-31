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
<h1 className="fw-bold">Our Work with Factory Workers</h1>
<p className="fs-4 thin">The apparel and textile industry in India is the second largest employer providing direct employment to 45 million people and 100 million people in the allied sector.</p>
</Container>
                  </Col>
<Col className="d-flex justify-content-center mb-2 mt-2" xs={12} lg={6}>
<Image
src="/images/apparel_banner.jpeg"
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

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
<h1 className="fw-bold">Our Programmes</h1>
<p className="fs-4 thin">Our journey of achieving well-being started by empowering workers, particularly women, in global supply chains; by building their capacities, strengthening their voices and enabling “responsible business” processes within the supply chain with improved adherence to social and legal requirements.</p>
</Container>
</Col>
<Col className="d-flex justify-content-center mb-2 mt-2">
<Image
src="/images/how-banner-2.jpeg"
width={700}
height={500}
/>
</Col>
</Row>
</Container>
    </>
  )
}

export default HeroBanner

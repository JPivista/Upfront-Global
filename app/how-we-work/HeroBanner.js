'use client'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'

function HeroBanner() {
  return (
    <>
<Container className="up-bg b-bottom" fluid>
<Row className="d-flex flex-row align-items-center">
<Col lg={6}>
<Container className='fs-5 text-white mt-2 mb-5'>
<h1 className="fw-bold">How We Work</h1>
<p className="fs-4 thin"><span className="highlight">We create</span> and enable partnerships and solutions because we believe that no single agency or approach is adequate to resolve complex problems. <span className="highlight">We empower</span> workforces, particularly women, by strengthening the capacities of individuals, institutions, systems and stakeholders for equity and equality. <span className="highlight">We promote</span> an enabling, safe, healthy and inclusive workplace, community, systems, values and culture to ensure workforce health and well-being.</p>
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

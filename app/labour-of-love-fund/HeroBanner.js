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
<h1 className="fw-bold">What Is the Labour of Love Fund?</h1>
<p className="fs-4 thin">Labour of Love is an Impact Finance Solution that focuses on enhancing the lives of women in the workforce.</p>
</Container>
</Col>
<Col className="d-flex justify-content-center mb-2 mt-2">
<Image
src="/images/labour-of-love.png"
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

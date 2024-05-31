'use client'
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next/image';

function How() {
  return (
    <Container className="up-bg pt-5 pb-3" fluid>
      <Container>
      <Row >
      <Col className="d-flex flex-column justify-content-center">
                  <Container>
                      <h1 className="text-center fw-bold text-white">How we do it</h1>
                  </Container>
                  </Col>
          </Row>
          <Row className="pt-5">
<Col lg={4} className="px-0 pt-4">
 <div className="h-card" >  
  <div class="card-body">
    <p class="card-text"><span className="highlight">We create</span> and enable partnerships and solutions because we believe that no single agency or approach is adequate to resolve complex problems</p>
</div>
<Image src="/images/how-banner-1.jpeg"
                          class="card-img-top mt-5"
                          alt="We create"
                          width={500}
                          height={300}
                      />
</div>
</Col>
<Col lg={4} className="px-0 pt-4">
 <div className="h-card" >  
  <div class="card-body">
    <p class="card-text"><span className="highlight">We empower</span> workforces, particularly women, by strengthening capacities of individuals, institutions, systems, stakeholders for equity and equality</p>
</div>
                      <Image
                          src="/images/how-banner-2.jpeg"
                          class="card-img-top mt-5"
                          alt="We empower"
                          width={500}
                          height={300}
                      />
</div>
</Col>
<Col lg={4} className="px-0 pt-4">
 <div className="h-card" >  
  <div class="card-body">
    <p class="card-text"><span className="highlight">We promote</span> enabling, safe, healthy, and inclusive workplaces, community, systems, values, culture to ensure workforce health and well-being</p>
</div>
                      <Image
                          src="/images/how-banner-3.jpeg"
                          class="card-img-top mt-5"
                          alt="We promote" 
                          width={500}
                          height={300}    
                      />
</div>
</Col>              
</Row>
    </Container></Container>
  )
}

export default How

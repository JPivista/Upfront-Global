'use client'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import CountUp from 'react-countup';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Who() {
  return (
      <><Container>
          <Row>
              <Col lg={4} sm={12} xs={12} className="d-flex flex-column justify-content-center">
                  <Container>
                  <h2 className="text-center fw-bold fs-1">Who We Are</h2>
                  <p className="text-center h-text">We respectfully work with workers and the “systems” by changing mindsets, behaviours and practices; by improving skills, financial security, processes and services; by building agency, ensuring voices and choices; by establishing partnerships and collaborations.</p>
                  <p className="text-center h-text">We have a positive impact on the workers’ eco-system by leveraging a systems change approach while ensuring knowledge, skills (personal and professional), services – health & wealth, through a platform approach that aggregates solutions and providers.</p>
                  <p className="text-center h-text">Some of the workforces we have been working with includes factory workers, street vendors, health workers and other gig workers.</p>
                <p className="text-center "><Link className="h-btn" href="/why-well-being">Find out more <FontAwesomeIcon icon={faArrowRight} /></Link></p>
                    
                  </Container>
              </Col>
              <Col lg={4} sm={12} xs={12} >
                  <Carousel
                      indicators={false}
                      interval={1200}
                      controls={false}
                  >
                      <Carousel.Item
                          
                          >
          <Image
                              className="d-block w-100"
                              src="/images/slider-1.jpeg"
                              alt="Who We Are"
                              width={400}
                              height={600}
          />
        </Carousel.Item>
        <Carousel.Item >
          <Image
            className="d-block w-100"
            src="/images/slider-2.jpeg"
            alt="Who We Are"
            width={400}
            height={600}
          />
         
                      </Carousel.Item>
                      <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/slider-3.jpeg"
            alt="Who We Are"
            width={400}
            height={600}
          />
         
                      </Carousel.Item>
                      <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/slider-11.jpeg"
            alt="Who We Are"
            width={400}
            height={600}
          />
         
        </Carousel.Item>
                      
      </Carousel>
</Col>
<Col lg={4} sm={12} xs={12}  className="d-flex flex-column justify-content-center">
                  <Container>
                  <h2 className="text-center fw-bold fs-1">Our Reach</h2>
                  <Row>
                  <Col lg={4} sm={6} xs={6}  className="d-flex flex-column align-items-center">
                              <Image 
                                  src="/images/icon-1.png"
                                  width="40"
                                  height="40"
                                  alt='Our Reach'
                              />
                              <CountUp
                                  end={496282}
                                  className="h-count" />
                              <p className="text-center">Apparel sector<br/>workforces</p>
                          </Col>
                          <Col lg={4} sm={6} xs={4} className="d-flex flex-column align-items-center d-none d-lg-block"></Col>
                          <Col lg={4} sm={6} xs={6} className="d-flex flex-column align-items-center">
                          <Image 
                                  src="/images/icon-2.png"
                                  width="40"
                                  height="40"
                                  alt='Our Reach'
                              />
                              <CountUp
                              end={802502}
                              className="h-count"
                          />
                          <p className="text-center">Informal<br/>workforces</p>
                          </Col>
                  </Row>
                  <Row>
                  <Col lg={4} sm={4} xs={4} className="d-flex flex-column align-items-center">
                          <Image 
                                  src="/images/icon-3.png"
                                  width="40"
                                  height="40"
                                  alt='workforces'
                              />
                              <CountUp
                              end={406635}
                              className="h-count"
                          />
                          <p className="text-center">Men<br/>workforces</p>
                          </Col>
                          <Col lg={4} sm={4} xs={4} className="d-flex flex-column align-items-center">
                          <Image 
                                  src="/images/icon-4.png"
                                  width="40"
                                  height="40"
                                  alt='workforces'
                              />
                              <CountUp
                              end={590141}
                              className="h-count"
                          />
                          <p className="text-center">Women<br/>workforces</p>
                          </Col>
                          <Col lg={4} sm={4} xs={4} className="d-flex flex-column align-items-center">
                          <Image 
                                  src="/images/icon-5.png"
                                  width="40"
                                  height="40"
                                  alt='workforces'
                              />
                              <CountUp
                              end={23496}
                              className="h-count"
                          />
                          <p className="text-center">Transgender<br/>workforces</p>
                          </Col>
                  </Row>
                  <Row>
                  <Col lg={4} sm={4} xs={4} className="d-flex flex-column align-items-center">
                          <Image 
                                  src="/images/icon-6.png"
                                  width="40"
                                  height="40"
                                  alt='Transgender'
                              />
                              <CountUp
                              end={633}
                              className="h-count"
                          />
                          <p className="text-center">Factories with<br/>interventions</p>
                          </Col>
                          <Col lg={4} sm={4} xs={4} className="d-flex flex-column align-items-center">
                          <Image 
                                  src="/images/icon-7.png"
                                  width="40"
                                  height="40"
                                  alt='Transgender'
                              />
                              <CountUp
                              end={162}
                              className="h-count"
                          />
                          <p className="text-center">Organization Partnered<br/>with (for informal sector)</p>
                          </Col>
                          <Col lg={4} sm={4} xs={4} className="d-flex flex-column align-items-center">
                          <Image 
                                  src="/images/icon-8.png"
                                  width="40"
                                  height="40"
                                  alt='Transgender'
                              />
                              <CountUp
                              end={41}
                              className="h-count"
                          />
                          <p className="text-center">Brands worked<br/>with (for apparel sector)</p>
                          </Col>
                      </Row>
                      </Container>
              </Col>
          </Row></Container>
    </>
  )
}

export default Who
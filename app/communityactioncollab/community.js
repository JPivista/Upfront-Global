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
<h1 className="fw-bold">Community Action Collab</h1>              
<hr className="h-line"/>              
</Container>
          <Container>
              <Row>
                  <Col lg={9}>
              <Image src="/images/community_banner.jpeg"
                  width={800}
                          height={500}
                          alt="Community Action Collab"
                          className="responsive" />
                      <p className="thin h-text">A dynamic humanitarian emergency platform that builds the resilience of vulnerable people and their institutions in everyday emergencies and makes them resilient over humanitarian crises.</p>
                      <p className="thin h-text">Building on the legacy of #COVIDActionCollab, Community Action Collab works to coordinate and guide the actions and decisions of its partners, the government and other alliances. CAC also addresses issues affecting millions of vulnerable people and ensures these individuals have access to vital livelihood, health, social protection and climate impact solutions.</p>
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

import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Share from '../../components/Share';
import Image from 'next/image'


function About() {
    return (
        <>
<Container className="mt-5 mb-5">
<Row>
<Col lg={9}>
<p className="thin h-text">These organisations include eight Street Vendors Associations and five Informal Workers’ Associations. We also supported MEPMA – Government of Telangana to strengthen their efforts towards Street vendors’ well-being on ground during the COVID-19 pandemic, in 2021 which was appreciated by the state government. We conceptualised interventions such as “Smart Vending” for street vendors to protect them during the pandemic and established the inter-connectivity between health and livelihoods.</p>
<p className="thin h-text">The Street Vendor and Informal Workforce organisations have been actively working on COVID prevention, care and management, vaccination, awareness on social protection schemes and digital financial literacy along with relief support (nutrition, hygiene kits, personal protective equipment and medical equipment).</p>
<p className="thin h-text">We seek and are committed to collaborative action to prioritise health & well-being and socioeconomic empowerment of the informal workers and street vendor community, especially women workers.</p>                        
                        <Image src="/images/our_reach_image.jpeg"
                            width={1000}
                            height={500}
                            className="img-fluid"
                        />
</Col>
<Col>
<Share/>
</Col>
</Row>
</Container>
        </>
  )
}

export default About
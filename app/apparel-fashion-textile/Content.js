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
<p className="thin h-text">The apparel and textile industry in India is the second largest employer providing direct employment to 45 million people and 100 million people in the allied sector. But as per a CII report, India’s apparel factory productivity levels are relatively low at 40-45% when compared to countries like Turkey and China who are at 60-65% and Bangladesh at 50-55%. From our collective experience and recent studies conducted by stakeholders, it is apparent that the lack of adequate and affordable healthcare options, accountability, standardisation of recruitment practices as well as low representation in worker committees or trade unions and lack of effective oversight by brand-led compliance on soft issues such as workers’ rights result in an ineffective and inefficient labour market system that impacts both workers, factories and the overall supply chain.</p>
<p className="thin h-text">For almost two decades, we have partnered with over 31 brands and organisations, built our presence in over 351 factories across 14 states in India and 14 countries across the Asian and African regions through technical support on building capacities, programmes, systems and workplace policies. We have reached over 350,000 workers and their families ( 60% are women). We have directly implemented our empowerment programmes among factories in India and have been providing technical support in the Asian and African regions.</p>
                        <Image src="/images/apparel_work.jpeg"
                            width={800}
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
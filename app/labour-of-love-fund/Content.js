import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Share from '../../components/Share'
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from 'next/image'
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
      loop: true,
      margin: 10,
      nav: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  };

function Content() {
  return (
    <Container className="mb-5 mt-5">
<Row>
<Col lg={9} >
<h2 className="fw-bold mt-4 mb-4">What Does the Fund Do?</h2>
          <p className="thin h-text">Systematic investment approach that prioritises the implementation of scalable, impactful, and sustainable solutions aimed at fostering resilience and prosperity. The $10 million USD in funds will comprise blended capital, grants, debts, and equity raised from donors, financial institutions and other stakeholders.</p>
          <Image src="/images/labour.png" width={400} height={300} className="img-fluid w-100" />
          <h2 className="fw-bold mt-4 mb-4">Who Will Benefit?</h2>
          <p className="thin h-text">This fund will be earmarked to improve the lives of <b>Women Workers</b> from the formal and informal sectors earning less than Rs 25,000 per month through a range of initiatives that improve their <b>voices, agency, financial security and overall well being.</b></p>
          <Image src="/images/labour-2.png" width={400} height={300} className="img-fluid w-100" />
          <h2 className="fw-bold mt-4 mb-4">Why the Fund?</h2>
          <p className="thin h-text">Labour markets operate in volatile, uncertain, complex, and ambiguous situations, and economic insecurities, inequalities, and precarious work conditions among workforces keep exacerbating. Women fall at the bottom of the pyramid and face extreme hardships and challenges, including uncertainty of employment, long work hours, low wages, delayed payments, sexual harassment, poor access to social protection, no career options, poor health, and the dual burden of gender roles.</p>
          <h2 className="fw-bold mt-4 mb-4">How Does It Work?</h2>
          <p className="thin h-text">This will encourage the private sector to invest in complex social issues across their supply chain while providing social returns through the outcomes of the interventions. It has the potential to steer the focus of brands, factories and local governments towards investment in their workforces for both worker and business wellbeing thus creating scope for a sustainable wellbeing for businesses and workforces both.</p>
                

</Col>
<Col><Share/></Col>
</Row>
          
</Container>
  )
}

export default Content

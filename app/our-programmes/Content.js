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
<p className="thin h-text">Over the last 15 years, we have partnered with over 30 brands and organisations, and built our presence in over 400 factories across 14 states in India and 12 countries across the Asian and African regions through technical support on building capacities, programmes, systems and workplace policies.</p>
          <p className="thin h-text">Our efforts have led to transformational changes across systems and behaviours, unlocking human values and potential outcomes, and impacts on individuals, institutions and the overall supply chain through programmes like Gap Inc. (P.A.C.E. – Personal Advancement and Career Enhancement), Walmart Foundation (Women in Factories), Levi’s (Worker Wellbeing), BSR (Business for Social Responsibility) for HERfinance, HERhealth, HERrespect programs, Debenhams, Zlabels (LIFE), Page Industries (Life Skill Initiative), Primark (My Life), Levi’s (Worker Wellbeing), Inditex (Sakhi, Happiness For All), M&S (Women’s Career Progression), H&M (Intervention Resource Repository Link: on Gender Equity), C&A (Interventions for gender equity and hostels), Li&Fung (Worker App), Lindex (We Women), VF (Employee Wellbeing) and Kontoor (Invest for Wellness). We have partnered with large-scale civil society organisations like CARE International and Gram Tarang.</p>
          <h2 className="fw-bold mt-4 mb-4">Our Work with Community Health Workers</h2>
          <p className="thin h-text">We have our in-house ‘Parivartan’ programme for community-based health workers on lifeskills, leadership for change and health. We have also worked with strengthening systems to improve the outcomes of human resources in the health sector, along with Swasti and the European Union.</p>
<p className="thin h-text">As a part of our support and response to workforces with COVID Action Collaborative, we reached poor and marginalised workforce communities especially from informal economy, like street vendors, home-based workers, construction workers, farmers, female sex workers, daily wage labourers, through our partners and collaborators. We also work with artisans who belong to traditional & indigenous communities.</p>
                  
<div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Gender Equity and Women’s Empowerment
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">We have developed a comprehensive ecosystem response to address gender-based violence (GBV). We work with factories to strengthen the workplace policies and systems on prevention of sexual harassment aligning with the Global call for action, national framework & laws (e.g., PoSH Act, India 2013). We also conduct sensitisation, leadership training, and capacity-building sessions for workers, employees and senior management to create an enabling environment for women’s leadership development.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Workplace Relationships and Life Skills
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">We provide leadership workshops for senior leadership in the factory to create a caring culture and system. We have also designed an Execution Excellence course for mid-management staff and supervisors to improve workplace relationships. We also develop in-house trainers through the ToT approach to leadership training and workshops.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Workplace Systems Strengthening
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">We provide technical support to strengthen workplace systems, processes and practices. We support the factories to strengthen their policies and workplace committees to improve social dialogue, promote workers’ rights and well-being, prevention and redressal against sexual harassment.</div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
      Digital and Financial Inclusion for Workforce
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">We help factories map their social protection schemes that are relevant for the workers. We help set up Unified Help Desks to facilitate the process of applying and availing of social protection schemes. We provide support to establish linkages with institutions and government departments that provide financial services and products. We assist factories to roll out training for workers on financial literacy modules, such as, budgeting, savings, responsible borrowings, financial products and social protection schemes/entitlements, etc. We introduce and facilitate financial tools and products to benefit and improve financial status and safety mechanisms for workers.</div>
    </div>
                      </div>
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
      Street Vendor Well-Being
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">We work with Street Vendors’ Associations and civil society organisations to support and enhance health & digital financial inclusion of street vendors across India. We have reached more than 300,000 street vendors so far. We also supported MEPMA–Government of Telangana to strengthen their efforts towards Street vendors’ well-being on ground during the COVID-19 pandemic in 2021, which was appreciated by the state government. We conceptualised interventions such as “Smart Vending” for street vendors to protect them during the pandemic and established the inter-connectivity between health and livelihoods.</div>
                              <div className="accordion-body">The Street Vendor organisations have been actively working on COVID prevention, care and management, vaccination, awareness on social protection schemes and digital financial literacy along with relief support (nutrition, hygiene kits, personal protective equipment and medical equipment).</div>
    </div>
                      </div>
                      <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
      Community Health Worker Empowerment – Parivartan
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Our work with community health workers entails improving systems to support the community health workers. Our life skills & leadership-based programme ‘Parivartan’, with Swasti’s i4We front line well-being workforce, led to an empowering community-led health workforces.</div>
    </div>
  </div>
                      
                      
</div>

<h2 className="mt-4 mb-4">Key Programmes</h2>                  
<OwlCarousel
          // className="owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          {...options}
        >
          <div className="item">
            <img
              alt="img1"
              src="/images/slider-1.png"
              className="partners"
            />
          </div>
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-2.png"
              className="partners"
            />
          </div>
   
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-4.png"
              className="partners"
            />
          </div>
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-5.png"
              className="partners"
            />
          </div>
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-6.png"
              className="partners"
            />
            
          </div>
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-7.png"
              className="partners"
            />
            
          </div>
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-8.png"
              className="partners"
            />
            
          </div>
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-9.png"
              className="partners"
            />
            
          </div>
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-10.png"
              className="partners"
            />
            
          </div>
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-11.png"
              className="partners"
            />
            
          </div>
          <div className="item">
          <img
              alt="img1"
              src="/images/slider-12.png"
              className="partners"
            />
            
          </div>
        </OwlCarousel>
</Col>
<Col><Share/></Col>
</Row>
          
</Container>
  )
}

export default Content

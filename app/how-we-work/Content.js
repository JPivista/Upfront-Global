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
    <Container className="mb-5">
          <h2 className="fw-bold mt-4 mb-4">Approaches and Methods</h2>
          <Row>
<Col lg={9} >
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
<div className="carousel-inner">
<div className="carousel-item active c-height">

      <div className="carousel-caption d-none d-md-block">
<h5 className="fs-1">Workforce empowerment</h5>
<ul>
<li className="fs-5">Building voice & agency</li>
<li className="fs-5">Access to resources products and services</li>
<li className="fs-5">Research & evaluation</li>
</ul>
      </div>
    </div>
    <div className="carousel-item d-height">
      
      <div className="carousel-caption d-none d-md-block">
<h5 className="fs-1">Enabling safe and inclusive systems</h5>
<ul>
<li className="fs-5">Strengthen workplace systems</li>
<li className="fs-5">Aggregation of services & solutions </li>
<li className="fs-5">Building capacities & perspectives</li>
</ul>
      </div>
    </div>
<div className="carousel-item e-height">  
<div className="carousel-caption d-none d-md-block">
<h5 className="fs-1">Collaborative, ecosystems-based worker centric approach</h5>
<ul>
<li className="fs-5">Collaborations</li>
<li className="fs-5">Partnerships</li>
<li className="fs-5">Policy shaping </li>
<li className="fs-5">Advocacy  </li>                                      
</ul>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h2 className="mt-4 mb-4">Our Domains of Work</h2>                  
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

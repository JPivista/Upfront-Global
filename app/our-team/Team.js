import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillLinkedin } from "react-icons/ai";
import Link from 'next/link'

function Team() {
  return (
    <>
<Container className="pt-5">
<h1 className="fw-bold">The Team Behind Upfront</h1>              
<hr className="h-line"/>              
</Container>
<Container>
          <h3>Core Team</h3>
              <Row>
          <Col  xs={6} lg={3}>
<div className="card t-card border-0" >
<img src="/images/shaonli.jpeg" className="card-img-top" alt="..." />
<Link href="https://www.linkedin.com/in/shaonli-chakraborty-she-her-58936b7/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link>
  <div className="card-body">
    <h5 className="card-title c-title">Shaonli Chakraborty</h5>
    <p className="card-text">Director</p>
  </div>
</div>
          </Col>
          <Col xs={6} lg={3}>
<div className="card t-card border-0" >
<img src="/images/priyamvada.jpeg" className="card-img-top" alt="..." />
<Link href="https://www.linkedin.com/in/priyamvada-b4a23b19/" target="_blank">
<AiFillLinkedin size={30} className="profile-icon" /></Link>
  <div className="card-body">
    <h5 className="card-title c-title">Priyamvada Tiwari</h5>
    <p className="card-text">Associate Director,Platform & Policy</p>
  </div>
            </div>
            </Col>
          <Col xs={6} lg={3}>
<div className="card t-card border-0" >
                          <img src="/images/sonali.jpeg" className="card-img-top" alt="..." />
                          <Link href="https://www.linkedin.com/in/sonalimaheshwari/?originalSubdomain=in" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link>
  <div className="card-body">
    <h5 className="card-title c-title">Sonali Maheshwari</h5>
    <p className="card-text">Lead, Content & Solutions</p>
  </div>
            </div>
            </Col>
          <Col xs={6} lg={3}>
<div className="card t-card border-0" >
                          <img src="/images/sathish.jpeg" className="card-img-top" alt="..." />
                          <Link href="https://www.linkedin.com/in/sathish-kn-b71415133/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link>
  <div className="card-body">
    <h5 className="card-title c-title">Sathish KN</h5>
    <p className="card-text">Program Manager,Content & Solutions</p>
  </div>
</div>
                  </Col></Row>  

<Row>

<Col xs={6} lg={3}>
<div className="card t-card border-0" >
                          <img src="/images/annapurna.png" className="card-img-top" alt="..." />
                        
  <div className="card-body">
    <h5 className="card-title c-title">Annapurna Chirravuri</h5>
    <p className="card-text">Knowledge Management & Learning Specialist</p>
  </div>
            </div>
            </Col>
          <Col xs={6} lg={3}>
<div className="card t-card border-0" >
                          <img src="/images/meeta.png" className="card-img-top" alt="..." />
                          <Link href="https://www.linkedin.com/in/meeta-sen-58750228/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link>
  <div className="card-body">
    <h5 className="card-title c-title">Meeta Sen</h5>
    <p className="card-text">Lead, Operations, NCR</p>
  </div>
            </div>
            </Col>
            <Col xs={6} lg={3}>
<div className="card t-card border-0" >
<img src="/images/sachin.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title c-title">Sachin Naik</h5>
    <p className="card-text">Program Specialist</p>
  </div>
              </div>
              </Col>
          <Col xs={6} lg={3}>
<div className="card t-card border-0" >
                          <img src="/images/sandhya.jpeg" className="card-img-top" alt="..." />
                          <Link href="https://www.linkedin.com/in/sandhya-shivaramaiah-107296119/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link>
  <div className="card-body">
    <h5 className="card-title c-title">Sandhya GS</h5>
    <p className="card-text">Implementation Manager</p>
  </div>
</div>
</Col></Row>
<Row>

<Col xs={6} lg={3}>
<div className="card t-card border-0" >
                          <img src="/images/prabhakaran.png" className="card-img-top" alt="..." />
                          <Link href="" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link>
  <div className="card-body">
    <h5 className="card-title c-title">Prabhakaran V</h5>
    <p className="card-text">Program Specialist - TN</p>
  </div>
            </div>
            </Col>
          <Col xs={6} lg={3}>            
<div className="card t-card border-0" >
                          <img src="/images/tanya.jpeg" className="card-img-top" alt="..." />
                          <Link href="https://www.linkedin.com/in/tanya-singh-a394b422b/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link>
  <div className="card-body">
    <h5 className="card-title c-title">Tanya Singh</h5>
    <p className="card-text">Monitoring and Learning Specialist</p>
  </div>
            </div>
            </Col>
          <Col xs={6} lg={3}>            
<div className="card t-card border-0" >
                          <img src="/images/abhinav.jpeg" className="card-img-top" alt="..." />
                          <Link href="https://www.linkedin.com/in/abhinav16111995/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link>
  <div className="card-body">
    <h5 className="card-title c-title">Abhinav Kumar</h5>
    <p className="card-text">Associate Project Manager</p>
  </div>
            </div>
</Col>
<Col xs={6} lg={3}>
<div className="card t-card border-0" >
                          <img src="/images/sunitha.jpeg" className="card-img-top" alt="..." />
                          
  <div className="card-body">
    <h5 className="card-title c-title">Sunitha Bai</h5>
    <p className="card-text">Technical Specialist,Content & Solutions</p>
  </div>
</div>
</Col></Row>               

<Container className="pt-4">
<h3>Specialists</h3>
<Row>

<Col xs={6} lg={3}>
<div className="card t-card border-0" >
<img src="/images/aprna.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title c-title">Aparna Suresh</h5>
    <p className="card-text">Street Vendor Well-being</p>
  </div>
              </div>
</Col>
<Col xs={6} lg={3}>              
<div className="card t-card border-0" >
<img src="/images/bhoopathy.jpeg" className="card-img-top" alt="..."/> <Link href="https://www.linkedin.com/in/bhoopathy-pandarinathan-89901a78/?originalSubdomain=in" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link> 
  <div className="card-body">
    <h5 className="card-title c-title">Bhoopathy P</h5>
    <p className="card-text">Social Protection</p>
  </div>
              </div>
</Col>
<Col xs={6} lg={3}>
<div className="card t-card border-0" >
<img src="/images/shankar.jpeg" className="card-img-top" alt="..."/> <Link href="https://www.linkedin.com/in/shankar-a-g-2b7a9656/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link> 
  <div className="card-body">
    <h5 className="card-title c-title">Shankar AG</h5>
    <p className="card-text">Invest for Wellness for Workforces</p>
  </div>
              </div>
</Col>
<Col xs={6} lg={3}>
<div className="card t-card border-0" >
<img src="/images/siddhant.jpeg" className="card-img-top" alt="..."/> <Link href="https://www.linkedin.com/in/siddhant-sawhney-86875869/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link> 
  <div className="card-body">
    <h5 className="card-title c-title">Siddhant Sawhney</h5>
    <p className="card-text">Technology</p>
  </div>
</div>
</Col></Row>
<Row>

<Col xs={6} lg={3}>              
<div className="card t-card border-0" >
<img src="/images/ritika.jpeg" className="card-img-top" alt="..."/> <Link href="https://www.linkedin.com/in/ritika-gupta-57529620/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link> 
  <div className="card-body">
    <h5 className="card-title c-title">Ritika Gupta</h5>
    <p className="card-text">Evidence for Change</p>
  </div>
              </div>
</Col>
<Col xs={6} lg={3}>
<div className="card t-card border-0" >
<img src="/images/latheef.jpeg" className="card-img-top" alt="..."/> <Link href="https://www.linkedin.com/in/abdul-latheef-p-7510a8200/" target="_blank"><AiFillLinkedin size={30} className="profile-icon" /></Link> 
  <div className="card-body">
    <h5 className="card-title c-title">Abdul Latheef</h5>
    <p className="card-text">Community Engagement</p>
  </div>
</div>

</Col></Row>                  
              </Container>
              
</Container>
    </>
  )
}

export default Team

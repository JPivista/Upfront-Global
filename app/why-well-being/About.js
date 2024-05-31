import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Share from '../../components/Share';


function About() {
    return (
      <>
    <Container className="mt-5">
          <Row>
              <Col lg={9}>
<p className="thin h-text">We strive to make well-being a reality for first-mile workers. We have over 20 years of collective experience strengthening ecosystems to protect workers’ rights, promote & improve their health, safety, security, entitlements and living conditions to create inclusive workplaces & enabling environments.</p>
<p className="thin h-text">Through various solutions, methodologies and evidence, we build, promote and facilitate long-term intervention models. We work on systems, policies and behaviours in order to increase scale, impact and sustainability.</p>
<h2>Why Do We Practise Workforce Well-Being?</h2>              
<p className="thin h-text">First-mile workers are highly vulnerable to poverty, exploitation, illness and have little or no incentive to invest in their development. They are at the bottom end of the power and social structures, with poor response systems, services, voice and agency, unable to realise their rights, entitlements and potential. To become resilient, workforces and their ecosystems require interventions, solutions and efforts to address such challenges.</p>
<p className="thin h-text">Our core values and principles encompass the belief that business and human rights can co-exist, ensuring an improved & balanced approach, but not at the cost of each other. We believe that no single entity, solution, or agency is adequate, and that collaboration, joint investment and partnership can enable significant results. We are deeply committed to the well-being of workers, their families and communities, and we do so by staying true to fundamental principles such as community-centric, accountability, sustainability, trust, transparency, ethical behaviour, respect, fairness, dignity, inclusivity, equity and equality.</p>
</Col>
<Col>
<Share/>
</Col>
</Row>
            </Container>
<Container fluid  className="h-banner" style={{ backgroundImage: `url("/images/about_stick_banner.png")`}}>
</Container>
<Container className="pt-5 pb-5">
<Row>
<Col lg={9}>

<p className="thin h-text">Our priority communities are:</p>
<ol>
<li className="thin h-text">Factory workforces</li>
<li className="thin h-text">Health workforces</li>
<li className="thin h-text">Informal workforces and street vendors</li>
</ol>
<p className="thin h-text">Our primary focus is to work with systems and partners to achieve:</p>
<ul>
<li className="thin h-text">A thriving and vibrant global platform that works to promote values, ethos, services and products</li>
<li className="thin h-text">Integrate horizontal solutions and innovations for positive transformations among workplaces, specific worker communities and their ecosystems</li>
<li className="thin h-text">‘Worker App’ delivering a range of services for health & wellbeing to workforces and employers</li>
<li className="thin h-text">100 million dollar fund for women’s workforce resilience & empowerment created & operationalised by 2025</li>
<li className="thin h-text">Influencing and advocating for improved policies, systems & practices for a healthy and thriving “workforce” (*priority communities)</li>
                </ul>
<p className="thin h-text">Our work on worker health & well-being, gender equality and women’s workforce empowerment have been recognised by International organisations, alliances, brands,  retailers, corporates, foundations  and civil societies such as the <a href="https://210b6e18-494e-4dc6-a802-eba99c52538d.filesusr.com/ugd/01ff14_2aa8af81fcd84420adf7c5a66c222658.pdf">United Nations Foundation</a>, <a href="https://www.worldbenchmarkingalliance.org/gender-benchmark-feedback-methodology/">World Benchmarking Alliance</a>, <a href="http://documents.worldbank.org/curated/en/505441539091790673/pdf/The-World-Bank-in-India-Newsletter-vol-17-no-2.pdf">World Bank</a>, <a href="https://cdn.corporate.walmart.com/1e/77/5c21cd694299b3235703c5ac8102/women-in-factories-fact-sheet-overview.pdf">Walmart Foundation</a> amongst several others. Our work has been evaluated for impact and business outcomes by <a href="https://sites.tufts.edu/laborlab/projects/wif/">Tufts Labor Lab</a> (Women in Factories), <a href="https://www.icrw.org/wp-content/uploads/2016/10/PACE_Report_PRINT_singles_lo.pdf">International Center for Research on Women-ICRW</a> (Personal Advancement and Career Enhancement (P.A.C.E.) and <a href="https://levistrauss.com/wp-content/uploads/2021/05/Harvard-SHINE_WWB-Impact-Study-Summary-Report_12-October-2020.pdf">Harvard Shine</a> (Worker Wellbeing Intervention of Levi Strauss Foundation). </p>
{/* <p className="thin h-text">To respond and address the current and emerging crisis around health, livelihood and social areas due to the COVID-19 pandemic, we have proposed <a href="https://swastihc.org/ways-the-apparel-industry-can-respond-to-covid-pandemic/">Apparel Sector Response</a> in consultation with key stakeholders from the supply chain. So far we have reached almost 4,400,000 workforces comprising factory workers, street vendors, construction workers, farmers, healthcare providers and informal workforces including domestic workers, fisherfolks, etc.</p>        */}
                  
</Col>
<Col></Col>
</Row>            
</Container>
</>
  )
}

export default About
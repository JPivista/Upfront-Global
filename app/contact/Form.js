import { useState} from 'react';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import configData from "config.json";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from 'next/link'
import Share from '../../components/Share'
import { FaSpinner } from "react-icons/fa";
import ContactForm from '../../utils/ContactForm'

function ContainerExample() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)
const [spinner, setSpinner] = useState(false);
const [btnHide, setDisabled] = useState(false);
    
    const [loading, setLoading] = useState(false);
    
    const [success, setSuccess] = useState(true);



    
    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log('Sending')
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!validateName(name)) {
            e.preventDefault();
            console.log('Name field is empty')
        }
        function validateName(name) {
            return name;
          }
          if (!validateName(message)) {
            e.preventDefault();
            console.log('message field is empty')
        }
        function validateName(message) {
            return message;
        }
        if (!validateEmail(email)) {
            e.preventDefault();
            console.log('this is not valid email address')           
        }
        else {
            let data = {
                name,
                email,
                message
            }
            //console.log(data)
            fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                console.log('Response received')
                setSpinner(true)
                setDisabled(true)
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setSubmitted(true)
                    setName('')
                    setEmail('')
                    setMessage('')
                    setSuccess(false)
                    setLoading(true)
                    setSpinner(true)
                    setDisabled(true)

                }
            })  

        }
        function validateEmail(email) {
        // Use regex or a validation library for email validation
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
       
        

        
    };

    


  return (
    <>
<Container className="pt-5">
<h1 className="fw-bold">Contact</h1>              
<hr className="h-line"/>              
</Container>
<Container className="mt-5 mb-4">
              <Image src="/images/contact_banner.jpeg" width={800} height={300} className="img-fluid c-img" alt="upfront global contact"
              
              priority={false}
              />
</Container>
      <Container className="pt-5">
        <Row>
          <Col lg={9}>
            <Row>
<Col>      
<ContactForm/>              
              </Col>
              

            </Row>
<Row className="pt-5 pb-5 ">
<h2>Careers</h2>
<h5>No Current Opening</h5>
{/* <Col lg={6} className="mt-4">                
<div className="card p-3 b-bg border-0">
<div className="card-body d-flex flex-column justify-content-between">
<h5 className="card-title">Technical Specialist</h5>  
<div className="d-flex justify-content-between">
<Link href="#"  className="btn btn-primary b-btn"><AiOutlineArrowRight size={28} /></Link>
<span>Updated on: 21-June-2022</span>                                  
</div>    
  </div>
</div> 
</Col> */}
{/* <Col lg={6} className="mt-4">                
<div className="card p-3 b-bg border-0">
<div className="card-body d-flex flex-column justify-content-between">
<h5 className="card-title">Senior Program Manager</h5>  
<div className="d-flex justify-content-between">
<Link href="#" className="btn btn-primary b-btn"><AiOutlineArrowRight size={28} /></Link>
<span>Updated on: 21-June-2022</span>                                  
</div>    
  </div>
</div> 
</Col>               */}
</Row>
</Col>
<Col><Share/></Col>
        </Row>
</Container>        





    </>
  );
}

export default ContainerExample;
'use client'
import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Col, Container } from 'react-bootstrap'
import Link from 'next/link'


const NotFound = () => {
    return (
        <div>
            <Header />
            <Container className='custom-kumarkom-menu-container pb-5  d-flex flex-column justify-content-center'>
                <div className="mainerror">
                    <h2 className="errortitle">404</h2>
                    <p className="errorhome">page not found</p>
                    <Link href="/" className="backhome">back to homepage</Link>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default NotFound

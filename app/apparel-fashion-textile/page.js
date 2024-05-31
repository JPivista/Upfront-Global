'use client'
import Header from '../../components/Header'
import Hero from '../apparel-fashion-textile/HeroBannerWell'
import Footer from '../../components/Footer'
import Content from '../apparel-fashion-textile/Content'



export default function about() {
  const pageTitle = "Initiatives to empower factory workers in the textile industry";
  const pageDescription = "We work factory workers in the textile industry and clothing manufacturers in India to build their resilience through empowerment programmes Know more";
  const MetaImage = '/images/apparel_banner.jpeg';
  return (
    <>  
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <Hero />
      <Content />
      <Footer/>
    </>
  )
}

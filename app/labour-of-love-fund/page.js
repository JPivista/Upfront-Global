'use client'
import Header from '../../components/Header'
import Hero from '../labour-of-love-fund/HeroBanner'
import Content from '../labour-of-love-fund/Content'
import Footer from '../../components/Footer'



export default function about() {
  const pageTitle = "Empowering women in workforce through wellbeing activities";
  const pageDescription = "Labour of love fund implements wellbeing activities that are aimed at improving the voice, agency and financial security of women in workforce. Know more.";
  const MetaImage = '/images/how-banner-2.jpeg';
  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <Hero />
      <Content/>
      <Footer/>
    </>
  )
}

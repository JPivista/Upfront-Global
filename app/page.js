'use client'
import Header from '../components/Header'
import Offcanvas  from '../components/OffCanvas'
import Hero from '../components/HomePage/HeroBanner'
import Who from '../components/HomePage/Who-We'
import How from '../components/HomePage/How-we'
import Banner from '../components/Footer-Banner'
import Footer from '../components/Footer'
import SchemaMarkup from '../components/SchemaMarkup'

export default function Home() {
  const pageTitle = "Creating positive impact on front line worker's ecosystem";
  const pageDescription = "We work with front-line workers & the systems to improve the eco-system by changing mindsets, behaviours & practises across different sectors, brands & countries.";
  const MetaImage = '/images/hero_banner.png';

  return (
    <>
      <SchemaMarkup/>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <Hero />
      <Who />
      <How />
      <Banner/>
      <Footer/>
    </>
  )
}
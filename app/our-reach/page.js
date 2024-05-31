'use client'
import Header from '../../components/Header'
import About from './Content'
import Footer from '../../components/Footer'


export default function about() {
  const pageTitle = "Our Reach - Upfront Global";
  const pageDescription = "";
  const MetaImage = '/images/reach.png';

  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <About />
      <Footer/>
    </>
  )
}

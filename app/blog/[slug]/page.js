'use client'
import Header from '../../../components/Header'
import About from './Fetch'
import Footer from '../../../components/Footer'


export default function about({ params }) {
  const pageTitle = "Insights on implementing wellbeing programmes for workforce";
  const pageDescription = "Read our insightful blogs to learn about the different intiatives and programmes that we implement to bring about positive change and wellbeing in the lives of workers";
  const MetaImage = '/images/hero_banner.png';
  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <About slug={params.slug} />

      <Footer />
    </>
  )
}

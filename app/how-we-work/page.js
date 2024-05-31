'use client'
import Header from '../../components/Header'
import Hero from '../how-we-work/HeroBanner'
import Content from '../how-we-work/Content'
import Footer from '../../components/Footer'
import Head from 'next/head'

export default function about() {
  const pageTitle = "Resolving complex problems and ensuring workforce well-being";
  const pageDescription = "Ensuring social development opportunities for front line workers by creating impactful collaborations, empowering workforces and promoting social security.";
  const MetaImage = '/images/apparel_banner.jpeg';
  const url = "https://upfront.global/how-we-work";
  
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Upfront Global",
    "url": `${url}`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}{search_term_string}`,
      "query-input": "required name=search_term_string"
    }
};


  return (
    <>
      <head>
                {/* <!-- HTML Meta Tags --> */}
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription}></meta>
                <meta name="robots" content="index,follow"></meta>
                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemprop="name" content={pageTitle}></meta>
                <meta itemprop="description" content={pageDescription}></meta>
                <meta itemprop="image" content=""></meta>

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content={url}></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content={pageTitle}></meta>
                <meta property="og:description" content={pageDescription}></meta>
                <meta property="og:image" content=""></meta>
                
                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content={pageTitle}></meta>
                <meta name="twitter:description" content={pageDescription}></meta>
                <meta name="twitter:image" content=""></meta>
                <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
      </head>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <Hero />
      <Content/>
      <Footer/>
    </>
  )
}

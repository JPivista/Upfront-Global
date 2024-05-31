'use client'
import Header from '../../components/Header'
import Hero from '../our-programmes/HeroBanner'
import Content from '../our-programmes/Content'
import Footer from '../../components/Footer'



export default function about() {
  const pageTitle = "Sophisticated programmes to ensure the well-being of workers";
  const pageDescription = "We work to ensure the workforce well being in the global supply chain by providing training for frontline workers, like community health workers Know more";
  const MetaImage = '/images/how-banner-2.jpeg';
  const url = "https://upfront.global/our-programmes";
  
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

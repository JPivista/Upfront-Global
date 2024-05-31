'use client'
import Header from '../../components/Header'
import About from './Blogs'
import Footer from '../../components/Footer'


export default function about() {
  const pageTitle = "Insights on implementing wellbeing programmes for workforce";
  const pageDescription = "Read our insightful blogs to learn about the different intiatives and programmes that we implement to bring about positive change and wellbeing in the lives of workers";
  const MetaImage = '/images/hero_banner.png';
  const url = "https://upfront.global/blog";
  
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
                <link rel="canonical" href={url} />
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
      <About />
      <Footer/>
    </>
  )
}

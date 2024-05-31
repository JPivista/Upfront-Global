import React, { useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';

function NextSeo({ title, description, path, metaImage }) {
  
  const router = useRouter();
  const [currentURL, setCurrentURL] = useState('');
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, [router.asPath]);


  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "upfront Global",
    "url": "https://upfront.global/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${currentURL}{search_term_string}`,
      "query-input": "required name=search_term_string"
    }
};

  return (
      
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow"></meta>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href={currentURL} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentURL} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
      <meta name="google-site-verification" content="RS9iyGnfdpni5YRIFlDkikah3eb5aduHi3IKZ3qr0kU" />
      <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
      
      
      </head>
      
  )
}

export default NextSeo

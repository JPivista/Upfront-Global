import React, { useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';

function SchemaMarkup() {
  
  const router = useRouter();
  const [currentURL, setCurrentURL] = useState('');
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, [router.asPath]);

  return (
    <head>
  
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Upfront",
        "url": {currentURL},
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${currentURL}{search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      })}
      </script>
      </head>

  )


}
export default SchemaMarkup;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import Share from '../../../components/Share'


const Post = ({ slug }) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://docs.upfront.global/wp-json/wp/v2/posts?_embed&slug=${slug}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
        if (result.length === 0) {
          //console.log('no data')
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  },);

  //console.log('Fetched data:', data);


  if (!data || !Array.isArray(data)) {
    return <p>Please wait....</p>;
  }

  return (
    <div>
      {data.map((post) => (
        <>
          <Container className="pt-5">
            <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <hr className="h-line" />
          </Container>
          <Container>
            <Row>
              <Col lg={9}>
                <p className="thin h-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

              </Col>
              <Col>
                <Share />
              </Col>
            </Row>
          </Container>
          <Container className="mb-4"><Link href="/blog" className="btn btn-upfront">View All Stories</Link></Container>
        </>
      ))}
      {
        error ? (
          <div className="mainerror">
            <h2 className="errortitle">404</h2>
            <p className="errorhome">page not found</p>
            <Link href="/" className="backhome">back to homepage</Link>
          </div>
        )
          : ''


      }


    </div>
  );
};

export default Post;
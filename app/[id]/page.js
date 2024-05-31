'use client'
import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import configData from "../../config.json";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// This function fetches data on the server side
async function fetchPostData(slug) {
    const res = await fetch(`${configData.SERVER_URL_WP}seo-blog?_embed&slug=${slug}`);
    if (!res.ok) {
        return null;
    }
    const data = await res.json();
    return data;
}

const Post = async ({ params }) => {
    const { id } = params;
    const data = await fetchPostData(id);

    console.log(data)

    if (!data || data.length === 0) {
        return <div>404 - Post not found</div>;
    }

    return (
        <div>
            {data.map((post, index) => (
                <React.Fragment key={index}>
                    <title>{post.acf.meta_title}</title>
                    <meta name="description" content={post.acf.meta_description} />
                </React.Fragment>
            ))}
            <Header />
            <div className='grid grid-cols-3 gap-5 w-full g-0'>
                {data.map((post, index) => (
                    <React.Fragment key={index}>
                        <Container fluid className="g-0" style={{ background: '#f40f34' }}>
                            <Container>
                                <Row className="g-0 flex-column flex-lg-row">
                                    <Col className="d-flex flex-column justify-content-center px-2">
                                        <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="text-white blog-head fs-1 bogle-medium" />
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                        <Container className="pt-5">
                            <div dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }} />
                        </Container>
                    </React.Fragment>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Post;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from 'next/link'
import Image from 'next/image'
import Moment from 'react-moment';
import { RotatingLines } from 'react-loader-spinner'


import { usePathname } from 'next/navigation'

const SuccessStories = () => {
  const pathname = usePathname()
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [loader, setLoader] = useState(false)



  const fetchMovies = async () => {
    let url = "";
    const urlPage = `${page}`;
    //console.log(urlPage)
    //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
    //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;
    url = `https://docs.upfront.global/wp-json/wp/v2/posts?_embed&production[]=19&categories[]=14&status[]=publish`; //Staging Enviroment
    //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&&production[]=77&status[]=publish&per_page=${urlPage}`; //Live Enviroment
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setMovies(data);
      setLoader(true)

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  },);




  return (
    <div>



      <Container>
        <Container className="pt-5">
          <h1 className="fw-bold">Blog</h1>
          <hr className="h-line" />
        </Container>
        {loader ? '' : (
          <Container className="text-center"><RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          /> </Container>

        )}
        <Row>

          {

            movies.map((post, index) => {
              //console.log(post);
              return (

                <>
                  <Col lg={4} key={post.id} className="mb-4">
                    <div className="card p-3 b-bg border-0">
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title" dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} />
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: post['excerpt']['rendered'] }} />
                        <div className="d-flex justify-content-between">

                          {post.acf.media_url ? (
                            // Render media URL if not empty
                            <Link href={post.acf.media_url} target="_blank" className="btn btn-primary b-btn">
                              <AiOutlineArrowRight size={28} />
                            </Link>

                          ) : (
                            // Render post slug if media URL is empty
                            <Link href={`/blog/${post.slug}`} target="_blank" className="btn btn-primary b-btn">
                              <AiOutlineArrowRight size={28} />
                            </Link>
                          )}
                          <span>Updated on: <Moment format="D MMM YYYY" withTitle>
                            {post['modified']}
                          </Moment></span>
                        </div>
                      </div>
                    </div>
                  </Col>

                </>
              )


            })}

        </Row>
      </Container>





    </div>
  );
};

export default SuccessStories;
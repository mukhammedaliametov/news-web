import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import client from '../client';
import BlockContent from '@sanity/block-content-to-react';
import '../styles/SinglePost.scss'

const SinglePage = () => {

  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : 
        <div className="single-post">
          <h4>{singlePost.title}</h4>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
            />
          )}
          <div className='title'>
            <BlockContent blocks={singlePost.body} projectId="8l6l4nld" datset='production' />
          </div>
          <Link className='btn' to='/news'>Read more News</Link>
        </div>
      }
    </>
  );
};

export default SinglePage;
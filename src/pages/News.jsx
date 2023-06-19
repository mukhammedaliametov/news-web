import React, { useEffect, useState } from 'react';
import client from '../client';
import { Link } from 'react-router-dom';
import '../styles/News.scss';

const News = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type == "post"]{
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
    ).then((data) => setPosts(data)).catch(console.error)
  }, [])

  return (
    <div className='news'>
      <h1>News</h1>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.slug.current}>
            <img src={post.mainImage.asset.url} alt="" />
            <h4>{post.title}</h4>
            <Link className='btn' to={`/blog/${post.slug.current}`}>See more</Link>
          </div>
        ))}
      </div>
    </div>

  );
};

export default News;
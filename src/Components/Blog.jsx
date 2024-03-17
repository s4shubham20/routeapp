import React from 'react'
import Header from './Include/Header';
import { blogData } from '../Data/blogData';
import {Link} from 'react-router-dom';
export default function Blog() {
    let blog = blogData.map((item, i) => {
        return(
            <div className='blogItems' key={i}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <button><Link to={`/blog/${item.id}`}>Read More</Link></button>
            </div>
        );
    });
  return (
    <>
        <Header/>
        <h1>Blog</h1>
        <div className='container'>
            {blog}
        </div>    
    </>
  )
}

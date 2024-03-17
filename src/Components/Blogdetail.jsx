import Header from './Include/Header';
import { useLocation } from 'react-router-dom';
import { blogData } from '../Data/blogData';

export default function Blogdetail(){
    
    let location = useLocation();
    let index = location.pathname.split('/')[2];
    let blog = blogData.filter((v) => v.id == index)[0];

    return(
        <>
            <Header/>
            <h1>Blogdetail</h1>
            <h2 style={{ textAlign:'center' }}>{blog.title}</h2>
            <p>{blog.body}</p>
        </>
    )
}
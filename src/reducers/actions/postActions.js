//import axios from 'axios';
import Post from '../../models/Post';
import { FETCH_POSTS, NEW_POSTS } from './index';

export const fetchPosts = () =>  dispatch => {
    return dispatch({
        type: FETCH_POSTS,
    })
    
    // axios.get("https://jsonplaceholder.typicode.com/posts?_limit=15")
    //     .then((data)=>{
            
    //     }).catch(err=>{
    //         console.log(err);
    //     })
}

export const createPost = (title,body) => dispatch => {

    let post = new Post(new Date().toISOString(),title,body);
            return dispatch(
                {
                    data:post,
                    type:NEW_POSTS
                }
            );
            
            // axios.post(
            //     "https://jsonplaceholder.typicode.com/posts"
            //     ,post.getClassInJSON()
            //     )
            //     .then((data)=>{ return data.data })
            //     .then((post)=>)
            //     .catch((err)=>{
            //         console.log(err);
            //     })
}
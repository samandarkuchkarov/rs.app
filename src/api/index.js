import axios from 'axios'

const url ='https://rs-app-clone.herokuapp.com/posts'
export const fetchPosts = () => axios.get(url)
export const createPost = (newPost)=>axios.post(url,newPost)
export const updatePost = (id,updatedPost)=> { 
    console.log(`${url}/${id}`)
    return axios.patch(`${url}/${id}`,updatedPost)}
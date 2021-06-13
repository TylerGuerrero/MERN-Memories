import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPost = async () => {
    return await axios.get(url)
}

export const createPost = async (newPost) => {
  return await axios.post(url, newPost)
}

export const putPost = async (id, updatedPost) => {
  return await axios.put(`${url}/${id}`, updatedPost)
}
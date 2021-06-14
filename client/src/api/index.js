import axios from 'axios'

const url = 'https://mern-memories-board.herokuapp.com/posts'

export const fetchPost = async () => {
    return await axios.get(url)
}

export const createPost = async (newPost) => {
  return await axios.post(url, newPost)
}

export const putPost = async (id, updatedPost) => {
  return await axios.put(`${url}/${id}`, updatedPost)
}
export const deletePost = async (id) => {
  return await axios.delete(`${url}/${id}`)
}

export const likePost = async (id) => {
  return await axios.put(`${url}/${id}/likePost`)
}
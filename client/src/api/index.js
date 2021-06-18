import axios from 'axios'
const API = axios.create({baseURL: 'http://localhost:5000'})

export const fetchPost = async () => {
    return await API.get('/posts')
}

export const createPost = async (newPost) => {
  return await API.post('/posts', newPost)
}

export const putPost = async (id, updatedPost) => {
  return await API.put(`/posts/${id}`, updatedPost)
}
export const deletePost = async (id) => {
  return await API.delete(`/posts/${id}`)
}

export const likePost = async (id) => {
  return await API.put(`/posts/${id}/likePost`)
}

export const signIn = async (formData) => {
  return await API.post('/user/signin', formData, {withCredentials: true})
}

export const signUp = async (formData) => {
  return await API.post('/user/signup', formData, {withCredentials: true})
}

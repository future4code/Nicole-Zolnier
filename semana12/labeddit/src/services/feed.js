import axios from 'axios'
import {baseUrl} from '../constants/urls'

const axiosConfig = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}

const getPosts = () => {
    axios.get(`${baseUrl}/posts`, axiosConfig).then(response => {
    }).catch(err => { 
    })   
}

export const createPost = (body) => {
    axios.post(`${baseUrl}/posts`, body, axiosConfig).then((res) => {
        window.alert("deu boa")
        getPosts()
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })
}

export const createComment = (body, postId) => {
    axios.post(`${baseUrl}/posts/${postId}/comment`, body, axiosConfig).then((res) => {
        window.alert("deu boa")
        getPosts()
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })
}

export const vote = (decision, postId) => {
    const body = {
        direction: decision,
    }
    
    axios.put(`${baseUrl}/posts/${postId}/vote`, body, axiosConfig).then((res) => {
        window.alert("deu boa")
        getPosts()
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })

}
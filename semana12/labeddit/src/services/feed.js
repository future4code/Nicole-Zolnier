import axios from 'axios'
import {baseUrl} from '../constants/urls'

const axiosConfig = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}

export const createPost = (body) => {
    axios.post(`${baseUrl}/posts`, body, axiosConfig).then((res) => {
        window.alert("deu boa")
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })
}

export const createComment = (body, postId) => {
    axios.post(`${baseUrl}/posts/${postId}/comment`, body, axiosConfig).then((res) => {
        window.alert("deu boa")
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })
}
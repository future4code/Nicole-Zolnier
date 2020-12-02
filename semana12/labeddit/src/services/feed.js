import axios from 'axios'
import {baseUrl} from '../constants/urls'

const axiosConfig = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}

export const createPost = (body, update) => {
    axios.post(`${baseUrl}/posts`, body, axiosConfig).then((res) => {
        window.alert("deu boa")
        update()
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })
}

export const createComment = (body, postId, update) => {
    axios.post(`${baseUrl}/posts/${postId}/comment`, body, axiosConfig).then((res) => {
        window.alert("deu boa")
        update()
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })
}

export const votePost = (body, postId, update) => {
    
    axios.put(`${baseUrl}/posts/${postId}/vote`, body, axiosConfig).then((res) => {
        window.alert("deu boa")
        update()
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })

}

export const voteComment = (body, postId, commentId, update) => {
    

    axios.put(`${baseUrl}/posts/${postId}/comment/${commentId}/vote`, body, axiosConfig).then((res) => {
        window.alert("deu boa")
        update()
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })

}
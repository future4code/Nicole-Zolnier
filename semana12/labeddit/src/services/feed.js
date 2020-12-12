import axios from 'axios'
import {baseUrl} from '../constants/urls'

export const createPost = (body, update) => {
    axios.post(`${baseUrl}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        window.alert("Post criado com sucesso!")
        update()
    }).catch((err) => {
      window.alert("Ih deu erro!")
    })
}

export const createComment = (body, postId, update) => {
    axios.post(`${baseUrl}/posts/${postId}/comment`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        window.alert("Comentário criado com sucesso!")
        update()
    }).catch((err) => {
      window.alert("Ih deu erro!")
      console.log(err)
    })
}

export const votePost = (body, postId, update) => {
    axios.put(`${baseUrl}/posts/${postId}/vote`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        update()
    }).catch((err) => {
      window.alert("Não foi, você poderia clicar novamente?")
      console.log(err)
    })

}

export const voteComment = (body, postId, commentId, update) => {
    axios.put(`${baseUrl}/posts/${postId}/comment/${commentId}/vote`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        update()
    }).catch((err) => {
      window.alert("Não foi, você poderia clicar novamente?")
      console.log(err)
    })

}
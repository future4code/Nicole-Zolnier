import { useState, useEffect } from 'react'
import axios from 'axios'
import {baseUrl} from '../constants/urls'

export const usePosts = () => {
    const axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    const [data, setData] = useState({});

    const getPosts = () => {
        axios.get(`${baseUrl}/posts`, axiosConfig).then(response => {
            setData(response.data);
        }).catch(err => {
            console.log(err.message);
        })    
    }

    useEffect(() => {
        getPosts()
    });

    return [data, getPosts];   
};
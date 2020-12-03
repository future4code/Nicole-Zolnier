import { useState, useEffect } from 'react'
import axios from 'axios'
import {baseUrl} from '../constants/urls'

export const useRequestData = (urlEnd) => {
    const axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    const [data, setData] = useState({});

    const getData = () => {
        axios.get(`${baseUrl}${urlEnd}`, axiosConfig).then(response => {
            setData(response.data);
        }).catch(err => {
            console.log(err.message);
        }) 
    }
    useEffect(() => {
        getData()
    }, [urlEnd]);

    return [data, getData]  
};
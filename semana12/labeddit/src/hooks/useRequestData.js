import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url, initialState) => {
    const axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    const [data, setData] = useState(initialState);

    const getData = () => {
        axios.get(url, axiosConfig).then(response => {
            setData(response.data);
        }).catch(err => {
            console.log(err.message);
        }) 
    }
    useEffect(() => {
        getData()
    }, [url]);

    return [data, getData]  
};
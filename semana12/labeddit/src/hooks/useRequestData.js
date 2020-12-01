import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url, initialState) => {
    const axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    const [data, setData] = useState(initialState);

    useEffect(() => {
        axios.get(url, axiosConfig).then(response => {
            setData(response.data);
        }).catch(err => {
            console.log(err.message);
        })    
    }, [url]);

    return data;   
};
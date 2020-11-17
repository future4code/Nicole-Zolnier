import React, { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(url)
      .then((resposta) => {
        setData(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [url]);

  return data;
}
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export function useProtectedPage() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login")
      window.alert("Você não está logado!")
    }

  }, [history]);
}

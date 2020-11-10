import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nicole"
function ClearAll() {
    const clearAll = () => {
        const beSure = window.confirm("Tem certeza que quer apagar todos os matches e perfis vistos?")

        if(beSure) {
            axios.put(`${baseUrl}/clear`).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    
    return (
      <div>
        <button onClick={clearAll}>limpar tudo</button>
      </div>
    );
  }
  
export default ClearAll;
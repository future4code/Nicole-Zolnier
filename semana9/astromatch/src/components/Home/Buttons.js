function Buttons(props) {
    return (
      <div>
        <button onClick={() => props.choosePerson("no")}>NÃO</button>
        <button onClick={() => props.choosePerson("yes")}>SIM</button>
      </div>
    );
  }
  
export default Buttons;
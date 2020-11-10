function Buttons(props) {
    return (
      <div>
        <button onClick={() => props.choosePerson( props.id, false)}>NÃO</button>
        <button onClick={() => props.choosePerson( props.id,  true)}>SIM</button>
      </div>
    );
  }
  
export default Buttons;
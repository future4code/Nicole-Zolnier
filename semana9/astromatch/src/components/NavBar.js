function NavBar(props) {
    return (
      <div>
        <button onClick={props.currentPage === "home"? null : props.goToHome}>{props.currentPage === "home"? null : "voltar"}</button>
        <h2>logo</h2>
        <button onClick={props.currentPage === "home"? props.goToMatches : null}>{props.currentPage === "home"? "ver match" : null}</button>
      </div>
    );
  }
  
export default NavBar;
function MatchCard(props) {
    return (
      <div>
        <img src={props.photo} />
        <h2>{props.name}</h2>
      </div>
    );
  }
  
export default MatchCard;
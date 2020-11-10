
function ProfileCard(props) {
    return (
      <div>
        <img src={props.profile.photo}/>
        <h1>{props.profile.name}, {props.profile.age}</h1>
        <p>{props.profile.bio}</p>
      </div>
    );
  }
  
export default ProfileCard;
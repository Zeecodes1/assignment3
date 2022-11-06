import Profile from "./Profile";

export default function CreateProfile(props) {
  return (
    <Profile
      key={props.login.uuid}
      image={props.picture.large}
      title={props.name.title}
      first={props.name.first}
      last={props.name.last}
      email={props.email}
      phone={props.phone}
      location={props.location.country}
    />
  );
}
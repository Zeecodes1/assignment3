export default function Profile(props) {
    return (
      <div className="profile--data">
        <section className="profile--img">
          <img src={props.image} alt="profile-avatar" />
        </section>
        <section className="profile--detail">
          <h1>Details</h1>
          <p>{props.title}</p>
          <p>{props.first}</p>
          <p>{props.last}</p>
          <p>{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.location}</p>
        </section>
      </div>
    );
  }
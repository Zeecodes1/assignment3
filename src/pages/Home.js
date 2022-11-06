import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
    <div className="homepage">
      <Link to="profile">Profile</Link>
    </div>
    </div>
  );
}
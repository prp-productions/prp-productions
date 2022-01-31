import { Link } from "react-router-dom";
import "../styles/home.css";

function Home(props) {
  return (
    <div
      className="home-component"
      style={{ backgroundImage: `url()` }}
    >
      <h2>
        Welcome, we are <Link to="/about">PRP-Productions</Link>. We are
        building a platform on which users can learn about music by creating
        their own compositions. The app will support learning, writing,
        recording, and file sharing with other users.
      </h2>
      <i className="fas fa-envelope" aria-hidden="true"></i> Hire us
    </div>
  );
}

export default Home;

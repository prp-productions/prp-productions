import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-component">
      <h2>
        Welcome, this is <Link to="/midiKeyboard">PRP-Productions</Link>. We are
        building a platform on which users can learn about music by creating
        their own compositions. The app will support learning, writing,
        recording, and file sharing with other users.
      </h2>
    </div>
  );
}

export default Home;
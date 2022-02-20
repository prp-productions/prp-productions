import { Link } from "react-router-dom";
import "../styles/homepage.scss";

export const PageHome = () => {
  return (
    <div className="home-component">
      <h1>
        <div className="swing-top-fwd">PRP-Productions</div>
      </h1>
      <div className="tagline">
        <div class="tagline-container">
          <span class="title-word title-word-1">Software built in </span>
          <span class="title-word title-word-2">Berlin, </span>
          <span class="title-word title-word-3">Bremen, </span>
          <span class="title-word title-word-4">Hamburg</span>
        </div>
      </div>
      <h2 className="description">
        Welcome, this is PRP-Productions. We are building a platform on which
        users can learn about music by creating their own compositions. The app
        will support learning, writing, recording, and file sharing with other
        users.
      </h2>
    </div>
  );
};

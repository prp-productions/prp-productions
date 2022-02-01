import Link from 'react';

export const PageHome = () => {
	  return (
    <div>
       <h2>
        Welcome, this is <Link to="/midiKeyboard">PRP-Productions</Link>. We are
        building a platform on which users can learn about music by creating
        their own compositions. The app will support learning, writing,
        recording, and file sharing with other users.
      </h2>
    </div>
  );
}
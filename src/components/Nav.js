import { Link } from 'react-router-dom';

export default function Nav({ loggedIn }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {loggedIn && (
          <>
            <li>
              <Link to="/protected">Protected</Link>
            </li>

            {/* protected links go here */}
          </>
        )}
      </ul>
      <p>User is logged in: {loggedIn.toString()}</p>
    </nav>
  );
}

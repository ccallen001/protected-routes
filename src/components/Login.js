import { useHistory } from 'react-router-dom';

export default function Login({ loggedIn, setLoggedIn }) {
  const history = useHistory();

  return (
    <div>
      <h1>{loggedIn ? 'Log Out' : 'Log In'}</h1>
      <button
        onClick={() => {
          setLoggedIn(!loggedIn);
          history.push('/');
        }}
      >
        {loggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

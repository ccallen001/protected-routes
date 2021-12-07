import { useHistory } from 'react-router-dom';

export default function Login({ loggedIn, setLoggedIn }) {
  const history = useHistory();

  console.log(setLoggedIn);

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
      <p
        style={{ marginTop: 16, cursor: 'pointer' }}
        onClick={() => history.push('/signup')}
      >
        Click here to sign up.
      </p>
    </div>
  );
}

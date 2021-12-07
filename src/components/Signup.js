import { useHistory } from 'react-router-dom';

export default function Signup({ loggedIn, setLoggedIn }) {
  const history = useHistory();

  console.log(setLoggedIn);

  return (
    <div>
      <h1>{loggedIn ? 'Log Out' : 'Sign Up'}</h1>
      <button
        onClick={() => {
          setLoggedIn(!loggedIn);
          history.push('/');
        }}
      >
        {loggedIn ? 'Log Out' : 'Sign Up'}
      </button>
    </div>
  );
}

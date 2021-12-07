import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <Nav loggedIn={loggedIn} />
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>

          <Route exact path="/signup">
            <Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>

          {loggedIn && (
            <>
              <Route exact path="/protected">
                <h1>Protected</h1>
              </Route>

              {/* protected routes go here */}
            </>
          )}

          <Route path="*">
            <p>There's nothing here.</p>
          </Route>
        </Switch>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;

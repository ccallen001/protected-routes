import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <main>
        {loggedIn ? (
          <div>
            <header className="App-header">
              <Nav loggedIn={loggedIn} />
            </header>
            <switch>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/login">
                  <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                </Route>

                <Route exact path="/protected">
                  <h1>Protected</h1>
                </Route>

                <Route path="*">
                  <Home />
                </Route>
              </Switch>
            </switch>
          </div>
        ) : (
          <switch>
            <Route path="*">
              <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </Route>
          </switch>
        )}
      </main>

      <footer></footer>
    </div>
  );
}

export default App;

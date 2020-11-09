import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route  exact path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

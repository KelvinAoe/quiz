import './App.css';
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';
import Page3 from './Page/Page3';
import Page4 from './Page/Page4';

import {BrowserRouter as Router , Switch, Route}from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Page1}  />
          <Route path="/page2" exact component={Page2}  />
          <Route path="/page3" exact component={Page3}  />
          <Route path="/page4" exact component={Page4}  />

          <Route  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

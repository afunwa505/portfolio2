
import './style.css';
import CV from './cv';
import Nav from './nav';
import Home from './home';
import About from './about';
import Works from './works';
import Contact from './contact';
import Service from './service';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about"> 
          <About /> 
          </Route>

          <Route path='/service'>
            <Service />
          </Route>

          <Route path='/works'>
            <Works />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/cv'>
            <CV />
          </Route>
        </Switch>

      </Router>
     
    </div>
  );
}

export default App;

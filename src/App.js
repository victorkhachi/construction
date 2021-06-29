import './App.css';
import Body from './components/body'
import {BrowserRouter as Router,
Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Services from './components/services'
import Tractor from './components/images/tractor.jpg'
import Building from './components/images/building.jpg'
import Projects from './components/projects'
import Project from './components/images/projects.jpg'

function App() {
  const name =<div>
                  <span>EULEX CONSTRUCTION COMPANY</span>
                  <h3>the best construction services...</h3>
              </div>
  const services=<div>
                   <span>SERVICES</span>
                   <h3>the best construction services...</h3>
                 </div>
  const projects=<div>
            <span>Projects</span>
            <h3>At EULEX , we do not look to meet our clients Expectations, we look to exceed them to the best level.</h3>
  </div>
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>         
          <Body content={<Home />} heading={name} img={Tractor}/>
        </Route>
        <Route path='/services'>
            <Body content={<Services />} heading={services} img={Building}/>
        </Route>
          <Route path='/projects'>
            <Body content={<Projects />} heading={projects} img={Project} />
          </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;

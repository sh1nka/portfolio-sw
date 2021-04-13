import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ImageContent from './components/ImageContent';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects'


function App() {
  return (
    <div className="App">
      <div className='left-side'>
        <Sidebar />
      </div>

      <div className='right-side'>
        <ImageContent />
      </div>

    </div>
  );
}

/*<div className='left-side'>
        <Sidebar />
      </div>

      <div className='right-side'>
        <ImageContent />
      </div>*/

export default App;

/*<Switch>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/projects' exact>
          <Projects />
        </Route>
      </Switch>*/
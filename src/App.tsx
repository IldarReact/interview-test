import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
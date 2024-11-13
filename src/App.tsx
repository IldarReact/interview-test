import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ThankYouPage from './pages/ThankYouPage/ThankYouPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/thank-you/:name" component={ThankYouPage} />
      </Switch>
    </Router>
  );
};

export default App;
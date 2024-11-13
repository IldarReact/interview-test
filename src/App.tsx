import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ThankYouPage from './pages/ThankYouPage/ThankYouPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/thank-you/:name" component={ThankYouPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

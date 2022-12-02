import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SignupSection from './components/SignupSection';
import Profile from './components/Profile'

function App() {
  return (
   
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
        <SignupSection />
        </Route>
        <Route path="/profile">
         <Profile />
        </Route>
      </Switch>
      
      
      </BrowserRouter>
   
  );
}

export default App;

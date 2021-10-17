import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking/Booking';
import Loging from './Pages/Loging/Loging';
import Header from './Pages/Sheared/Header/Header';
import AuthProvider from './Pages/contexts/AuthProvider';
import PrivateRoute from './Pages/Loging/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Loging></Loging>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

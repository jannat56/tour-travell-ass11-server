import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking/Booking';
import ManageServices from './Pages/ManageServices/ManageServices';




function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
    <Switch>
    <Route exact path="/">
          <Home></Home>
          </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
        <PrivateRoute path="/addServices">
         <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manageservices">
             <ManageServices></ManageServices>
            </PrivateRoute>
        <Route path="/login">
         <Login></Login>
          </Route>
    </Switch>
        <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

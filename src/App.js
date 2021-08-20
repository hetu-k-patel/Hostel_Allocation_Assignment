import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/auth/Login';
import './App.css';
import Gender from './components/gender/Gender';
import Hostel from './components/hostel/Hostel';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Floor from './components/Floor/Floor';
import Home from './components/Home/home';
import Navbar from './components/Navbar/Navbar';

const user = JSON.parse(localStorage.getItem('user'));
const App = () => {
   return (
      <BrowserRouter>
         <Navbar user={user} />
         <Switch>
            <Route
               path="/"
               exact
               component={() =>
                  !user ? <Redirect to="/login" /> : <Redirect to="/home" />
               }
            />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/gender" component={Gender} />
            <Route path="/hostel" component={Hostel} />
            <Route path="/floor" component={Floor} />
         </Switch>
      </BrowserRouter>
   );
};

export default App;

import { AUTH } from '../../config/firebase';

import './styles.css';
import Logo from '../../images/logo.png';

const Navbar = ({ user }) => {
   const handleSignOut = () => {
      localStorage.removeItem('user');
      AUTH.signOut().then(() => (window.location.href = '/login'));
   };

   return (
      <header>
         <div className="logo">
            <img src={Logo} alt="" />
         </div>
         <nav>
            <div className="profile">
               <img
                  src={
                     !user
                        ? 'https://image.flaticon.com/icons/png/512/147/147144.png'
                        : user['photoURL']
                  }
                  alt=""
               />
            </div>
            <div className="logoutButton">
               {user ? <button onClick={handleSignOut}>Logout</button> : null}
            </div>
         </nav>
      </header>
   );
};

export default Navbar;

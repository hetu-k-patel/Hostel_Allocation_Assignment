import firebase from 'firebase';

import './styles.css';
import Logo from '../../images/logo.png';

const Navbar = ({ user }) => {
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
               <button
                  onClick={() => {
                     firebase.auth().signOut();
                  }}
               >
                  Logout
               </button>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;

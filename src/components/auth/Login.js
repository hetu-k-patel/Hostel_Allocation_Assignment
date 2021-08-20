import { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { uiConfig, firebaseConfig } from '../../config/firebase';

import './styles.css';
import Gender from '../gender/Gender';
import { Redirect } from 'react-router-dom';

const Login = () => {
   const [isSignedIn, setIsSignedIn] = useState(false);
   const [user, setUser] = useState({});

   if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   } else {
      firebase.app();
   }

   useEffect(() => {
      const unregisterAuthObserver = firebase.auth().onAuthStateChanged((authUser) => {
         if (authUser) {
            if (!localStorage.getItem('user')) {
               setUser({
                  displayName: authUser['displayName'],
                  email: authUser['email'],
                  photoURL: authUser['photoURL'],
                  display: authUser['displayName'],
                  uid: authUser['uid'],
               });
               localStorage.setItem(
                  'user',
                  JSON.stringify({
                     displayName: authUser['displayName'],
                     email: authUser['email'],
                     photoURL: authUser['photoURL'],
                     uid: authUser['uid'],
                  })
               );
            } else {
               const localUser = JSON.parse(localStorage.getItem('user'));
               if (localUser.uid !== authUser['uid']) {
                  localStorage.setItem('user', JSON.stringify(user));
               }
            }

            setIsSignedIn(!!authUser);
         } else {
            setUser({});
         }
      });
      return () => unregisterAuthObserver();
   }, []);

   if (!isSignedIn) {
      return (
         <div className="login">
            <h1>Hostel Application</h1>
            <p>Please Sign In:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
         </div>
      );
   }
   return (
      <div>
         <Redirect to="/gender" />
      </div>
   );
};

export default Login;

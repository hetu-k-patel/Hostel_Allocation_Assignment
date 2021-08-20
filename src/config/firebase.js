import firebase from 'firebase';

export const firebaseConfig = {
   apiKey: 'AIzaSyD5NeSnIciq54j68Sz80R2abJQdkX-JilQ',
   authDomain: 'hostel-allocation-assign-12a49.firebaseapp.com',
   projectId: 'hostel-allocation-assign-12a49',
   storageBucket: 'hostel-allocation-assign-12a49.appspot.com',
   messagingSenderId: '728687487079',
   appId: '1:728687487079:web:698ea8a19dad6afecc4cc2',
   measurementId: 'G-M068D6CRKR',
};

export const uiConfig = {
   signInFlow: 'popup',
   signInSuccessUrl: '/signedIn',
   signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
   ],
};

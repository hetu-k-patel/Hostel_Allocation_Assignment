import { Redirect, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './styles.css';

const Hostel = () => {
   const localUser = JSON.parse(localStorage.getItem('user'));
   const [isBoy, setIsBoy] = useState(true);
   const [user, setUser] = useState({});
   const history = useHistory();

   useEffect(() => {
      if (localUser) {
         setIsBoy(localUser['gender'] === 'boy' ? true : false);
         setUser(localUser);
      }
   }, []);

   const handleCard = (e) => {
      const newLocalUser = { ...user, hostel: e.target.dataset['hostel'] };
      localStorage.setItem('user', JSON.stringify(newLocalUser));
      history.push('/floor');
   };

   if (!!!localUser) {
      return <Redirect to="/login" />;
   } else if (localUser['isAllSet']) {
      return <Redirect to="/home" />;
   } else if (!localUser['gender']) {
      return <Redirect to="/gender" />;
   }

   return (
      <section className="hostelSection">
         <div className="title">
            <h1>Choose your Hostel</h1>
         </div>
         <div className="card-wrapper">
            <div
               className={isBoy ? 'card boy-card' : 'card girl-card'}
               data-hostel="1"
               onClick={handleCard}
            >
               <h2>{isBoy ? 'B1' : 'G1'}</h2>
            </div>
            <div
               className={isBoy ? 'card boy-card' : 'card girl-card'}
               data-hostel="2"
               onClick={handleCard}
            >
               <h2>{isBoy ? 'B2' : 'G2'}</h2>
            </div>
            <div
               className={isBoy ? 'card boy-card' : 'card girl-card'}
               data-hostel="3"
               onClick={handleCard}
            >
               <h2>{isBoy ? 'B3' : 'G3'}</h2>
            </div>
            <div
               className={isBoy ? 'card boy-card' : 'card girl-card'}
               data-hostel="4"
               onClick={handleCard}
            >
               <h2>{isBoy ? 'B4' : 'G4'}</h2>
            </div>
            <div
               className={isBoy ? 'card boy-card' : 'card girl-card'}
               data-hostel="5"
               onClick={handleCard}
            >
               <h2>{isBoy ? 'B5' : 'G5'}</h2>
            </div>
            <div
               className={isBoy ? 'card boy-card' : 'card girl-card'}
               data-hostel="6"
               onClick={handleCard}
            >
               <h2>{isBoy ? 'B6' : 'G6'}</h2>
            </div>
         </div>
      </section>
   );
};

export default Hostel;

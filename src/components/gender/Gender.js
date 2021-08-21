import { Redirect, useHistory } from 'react-router-dom';
import './styles.css';

const Gender = () => {
   const localUser = JSON.parse(localStorage.getItem('user'));
   const history = useHistory();

   const handleCard = (e) => {
      const newLocalUser = { ...localUser, gender: e.target.dataset['gender'] };
      localStorage.setItem('user', JSON.stringify(newLocalUser));
      history.push('/hostel');
   };

   if (!!!localUser) {
      return <Redirect to="/login" />;
   } else if (localUser['isAllSet']) {
      return <Redirect to="/home" />;
   }

   return (
      <section className="genderSection">
         <div className="title">
            <h1>Choose your Gender</h1>
         </div>
         <div className="card-wrapper">
            <div className="card girl-card" data-gender="girl" onClick={handleCard}>
               <div className="icon"></div>
               <div className="text">
                  <h2>Girls Hostels</h2>
               </div>
            </div>
            <div className="card boy-card" data-gender="boy" onClick={handleCard}>
               <div className="icon"></div>
               <div className="text">
                  <h2>Boys Hostels</h2>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Gender;

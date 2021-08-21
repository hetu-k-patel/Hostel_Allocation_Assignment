import { Redirect } from 'react-router-dom';

const Home = () => {
   let localUser = JSON.parse(localStorage.getItem('user'));

   if (!!!localUser) {
      return <Redirect to="/login" />;
   } else if (!localUser['gender']) {
      return <Redirect to="/gender" />;
   } else if (!localUser['hostel']) {
      return <Redirect to="/hostel" />;
   } else if (!localUser['floor']) {
      return <Redirect to="/floor" />;
   }

   return (
      <section className="homeSection">
         <div className="box">
            <h1>Welcome {localUser['displayName']}!</h1>
            <h3>Your room is has been already booked successfully.</h3>
            <h4>Your room details are as follows:</h4>
            <p>
               Hostel No.{' '}
               <span>
                  {localUser['gender'] === 'boy'
                     ? 'B' + localUser['hostel']
                     : 'G' + localUser['hostel']}
               </span>
            </p>
            <p>
               Floor No. <span>{localUser['floor']}</span>
            </p>
            <p>
               Room No. <span>{localUser['room']}</span>
            </p>
         </div>
      </section>
   );
};

export default Home;

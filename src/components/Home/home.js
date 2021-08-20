import { useMemo } from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
   const user = useMemo(() => {
      return JSON.parse(localStorage.getItem('user'));
   }, []);

   return (
      <section className="homeSection">
         <div className="box">
            <h1>Success</h1>
            <h3>Your room is has been booked successfully.</h3>
            <h4>Your room details are as follows:</h4>
            <p>
               Hostel No.{' '}
               <span>
                  {user['gender'] === 'boy' ? 'B' + user['hostel'] : 'G' + user['hostel']}
               </span>
            </p>
            <p>
               Floor No. <span>{user['floor']}</span>
            </p>
            <p>
               Room No. <span>{user['room']}</span>
            </p>
         </div>
      </section>
   );
};

export default Home;

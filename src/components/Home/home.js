import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
   const localUser = localStorage.getItem('user');

   if (!localUser) {
      return <Redirect to="login" />;
   } else if (localUser['isAllSet']) {
      return <Redirect to="home" />;
   }

   return (
      <>
         <h1>Home</h1>
      </>
   );
};

export default Home;

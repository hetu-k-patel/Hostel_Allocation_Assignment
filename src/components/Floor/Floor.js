import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Popup from '../popup/Popup';
import './styles.css';

const floorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Floor = () => {
   const localUser = JSON.parse(localStorage.getItem('user'));
   const [user, setUser] = useState({});
   const [floor, setFloor] = useState(1);
   const [showBookButton, setShowBookButton] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   const togglePopup = () => {
      setIsOpen(!isOpen);
   };

   const reset = () => {
      document.querySelectorAll('.card').forEach((card) => {
         card.classList.remove('book-card');
         card.removeAttribute('id');
      });
   };

   const handleCard = (e) => {
      reset();
      e.target.classList.toggle('book-card');
      e.target.id = 'selectedRoom';
      setShowBookButton(true);
   };

   const handleBookRoom = (e) => {
      const roomNumber = document.getElementById('selectedRoom').textContent;
      const newLocalUser = { ...user, room: roomNumber, floor, isAllSet: true };
      console.log(newLocalUser);
      localStorage.setItem('user', JSON.stringify(newLocalUser));
      //   history.push('/floor');
      togglePopup();
   };

   useEffect(() => {
      setUser(localUser);

      if (!localUser) {
         return <Redirect to="login" />;
      } else if (localUser['isAllSet']) {
         return <Redirect to="home" />;
      }
   }, []);

   return (
      <section className="floorSection">
         <div className="title">
            <h1>Choose your Floor</h1>
         </div>
         <div className="floorSelect">
            <select id="floor" value={floor} onChange={(e) => setFloor(e.target.value)}>
               {floorArr.map((floor, index) => (
                  <option key={'floor' + index} value={index + 1}>
                     {index + 1} Floor
                  </option>
               ))}
            </select>
         </div>
         <div className="card-wrapper">
            {floorArr.map((room, index) => (
               <h2 className="card" key={'room' + index} onClick={handleCard}>
                  {index + 1}
               </h2>
            ))}
         </div>
         <div className="bookButton">
            {showBookButton && <button onClick={handleBookRoom}>Book Room</button>}
         </div>
         {isOpen && (
            <Popup
               content={
                  <>
                     <b>Design your Popup</b>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                     <button>Test button</button>
                  </>
               }
               handleClose={togglePopup}
            />
         )}
      </section>
   );
};

export default Floor;

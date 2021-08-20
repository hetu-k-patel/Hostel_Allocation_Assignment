import { useHistory } from 'react-router-dom';
import './styles.css';

const Popup = ({ user, handleClose }) => {
   const history = useHistory();
   return (
      <div className="popup-box">
         <div className="box">
            <span className="close-icon" onClick={handleClose}>
               x
            </span>
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
            <button onClick={() => history.push('/home')}>Go to Home</button>
         </div>
      </div>
   );
};

export default Popup;

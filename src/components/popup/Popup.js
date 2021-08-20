import { useHistory } from 'react-router-dom';
import './styles.css';

const Popup = (props) => {
   const history = useHistory();

   return (
      <div className="popup-box">
         <div className="box">
            <span className="close-icon" onClick={props.handleClose}>
               x
            </span>
            <h1>Success</h1>
            <h3>Your room is has been booked successfully.</h3>
            <h4>Your room details are as follows:</h4>
            <p>
               Hostel No. <span>B4</span>
            </p>
            <p>
               Room No. <span>8</span>
            </p>
            <button onClick={() => history.push('/')}>Go to Home</button>
         </div>
      </div>
   );
};

export default Popup;

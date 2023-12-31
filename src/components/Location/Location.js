import { Link } from "react-router-dom";
import image from "../../images/stockImages/cc-stock-1.png";
import "./location.css";
import Intakeq from '../Services/type/Buttons/intakeq/intakeq';
import GoogleMaps from './GoogleMaps';


export default function Location(props) {
  return (
    <div className="locationContainer">
    <GoogleMaps/>
      <img className="welcomeImage" src={image} alt="Welcoming Flower" />
      <h1 className="locationTitle">Visits to ARC Massage</h1>
      <div>
        We currently do not offer walk in visits. However we do offer same day
        appointments if they are made far enough in advance.
      </div>
      <div>
        We recommend scheduling at least 2 hours prior to give your therapist
        enough time.
      </div>
      <div>
        However, we may have a spot that becomes available if another client
        cancels their appointment.
      </div>
      <div className="lastDiv">Business hours listed in the link below.</div>
      <Link className="locationButton" to="/about">
        Hours & Additonal Information
      </Link>

      <div className="locationIntakeQ">
        <Intakeq />
      </div>
    </div>
  );
}

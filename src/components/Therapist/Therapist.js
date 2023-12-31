import TherapistCard from "./therapistCard/TherapistCard";
import "./therapists.css";
import { db } from "./therapistsDB/db";

import fullStaff from './therapistsDB/Img/full-staff-2nd.jpg'

export default function Therapist(props) {
  const therapistCards = db.map((el, idx) => {
    return (
        <div key={idx}>
          <TherapistCard el={el} /> <hr />
        </div>
    );
  });
  return (
    <>
      <img
        src={fullStaff}
        alt="family"
        className="familyPhoto"
      />
      {therapistCards}
    </>
  );
}

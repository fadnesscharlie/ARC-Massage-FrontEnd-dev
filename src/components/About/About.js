import { Grid } from '@mui/material';
import { intro, hours, policy } from '../About/db/db';
import './about.css';

export default function About(props) {
  
  const introSection = intro.map((el) => {
    return <div className="infoParagraph">{el}</div>;
  });

  const hoursSection = hours.map((el) => {
    return (
      <Grid item className="gridItem">
        <div className="hourDay">{el.day}</div>
        <div className="hourTime">
          {el.hours} {el.day === 'Sunday' ? '' : 'Appointments only'}
        </div>
      </Grid>
    );
  });

  const policySection = policy.map((el) => {
    return (
      <div>
        <div className="policyTitle">{el.title}</div>
        <div>
          {el.info.map((info) => (
            <div className="policyInfo">{info}</div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className="aboutContainer">
      <section className="width1024 introSection">
        {introSection}
        {/* <section className="introButton">Email</section>
        <section className="introButton">Call / Text</section>
        <section className="introButton">Policies and Info</section> */}
      </section>

      <section className="hours">
        <section className="width1024">
          <div className="busHours">
            <i className="bi bi-clock"></i> <span>Business Hours</span>
          </div>
          <Grid container>{hoursSection}</Grid>
        </section>
      </section>

      <section className="width1024 contactSection">
        <div>Let us know how we can best serve you.</div>
        <div className="appContact">Phone: Appointment / Contact / Text</div>
        <div className="line"> </div>
        <span>Phone Number: </span>
        <span className="phoneNumber">
          <a href="tel:2064753574">(206) 475-3574</a>
          <div></div>
        </span>
        <span>Fax Number: </span>
        <span>206-258-8843</span>
      </section>

      <section className="width1024 poicySection">
        <div className="policyIntro">Policies and Information</div>
        {policySection}
      </section>
      <div className="endOfAbout"></div>
    </div>
  );
}

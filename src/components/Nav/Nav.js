import { useState } from 'react';
import { Link } from 'react-router-dom';
import Intakeq from '../Services/type/Buttons/intakeq/intakeq';

export default function Nav(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="navContainer">
        <span>
          <Link className="linkComponent" to="/">
            <span style={{ color: props.fontColor }}>Home</span>
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/location">
            <span style={{ color: props.fontColor }}>Location</span>
          </Link>
        </span>

        <span>
          <Link className="linkComponent" to="/services">
            <span style={{ color: props.fontColor }}>Services</span>
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/medical">
            <span style={{ color: props.fontColor }}>Insurance</span>
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/therapist">
            <span style={{ color: props.fontColor }}>Team</span>
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/about">
            <span style={{ color: props.fontColor }}>Contact</span>
          </Link>
        </span>
      </ul>
      <span className="bookNow">
        <Intakeq />
      </span>

      {/* <div className="hamburger" onClick={toggleMobileMenu}> */}
      <div
        className={
          open ? 'hamburger openHamburger' : 'hamburger closedHamburger'
        }
        onClick={() => setOpen(open ? false : true)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={open ? 'navMobileContainer' : 'closed'}>
        <div className="navLinkComponentContainer">
          <Link
            className="navLinkComponent"
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link
            className="navLinkComponent"
            to="/location"
            onClick={() => setOpen(false)}
          >
            Location
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link
            className="navLinkComponent"
            to="/services"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link
            className="navLinkComponent"
            to="/medical"
            onClick={() => setOpen(false)}
          >
            Insurance
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link
            className="navLinkComponent"
            to="/therapist"
            onClick={() => setOpen(false)}
          >
            Team
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link
            className="navLinkComponent"
            to="/about"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
        <span
          className="navLinkComponentContainer"
          onClick={() => setOpen(false)}
        >
          <Intakeq className="navLinkComponent" />
        </span>
      </ul>
    </>
  );
}

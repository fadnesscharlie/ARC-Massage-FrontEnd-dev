import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./main.css";
import Banner from '../Banner/Banner';

export default function Main(props) {
  return (
    <div className="mainBackground">
      <Header />
      <Banner />
      <section className="main">
        <div className="opening"></div>
        <div className="span titleTextLeft intro">
          Professional
          {/* TAKE OUT br */}
          <br /> Tender Love
          <br /> and Care.
        </div>
        <div className="span titleTextRight">
          <div className="intro">
            Get the rejuvenating feeling your body has been craving.
          </div>
            <Link to="/services" className="MTSessionButton">
              ARC Services
            </Link>
        </div>
      </section>
    </div>
  );
}

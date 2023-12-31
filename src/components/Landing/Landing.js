import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Main from "../Main/Main";
import Medical from '../Medical/Medical';
import Services from "../Services/Services";
import Therapist from '../Therapist/Therapist';
import "./landing.css";
import Banner from '../Banner/Banner';
import EstheticServices from '../Services/EstheticService'


export default function Landing(props) {
  return (
    <div className="landingPage">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <Routes>
        <Route
          exact
          path="/location"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'}/>
              <Banner />
              <Location />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/services"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'}/>
              <Banner />
              <Services />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/estheticServices"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'}/>
              <Banner />
              <EstheticServices />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/medical"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'}/>
              <Banner />
              <Medical />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/therapist"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'}/>
              <Banner />
              <Therapist />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/about"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'}/>
              <Banner />
              <About />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

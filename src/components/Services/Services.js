import './services.css';
import Intakeq from './type/Buttons/intakeq/intakeq';
import { Tab, Tabs } from 'react-bootstrap';
import MassageServices from './type/MasssageServices';
// import EstheticServices from './EstheticService';
import GiftCardButton from './type/Buttons/GiftCards/giftCardButton';
// import PackageSale from './sale/PackageSale';

export default function Services(props) {
  return (
    <div className="serviceContainer">
      <div>
        <h2 className="servicesTitle">Services</h2>
        <div className="servicesInfo">
          Here's what to consider when you book with us.
        </div>

        <Tabs
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="esthetics" title="Massage Services" tabClassName="tab">
            <MassageServices />
          </Tab>
          {/* <Tab
            eventKey="services"
            title="Esthetic Services"
            tabClassName="tab"
            fill
          >
            <EstheticServices />
          </Tab> */}
        </Tabs>
      </div>
      <section className="bookAppContainer">
        <GiftCardButton />
        <Intakeq />
      </section>
    </div>
  );
}

import { Alert } from 'react-bootstrap';

let Sale = (
  <p>
    <p>Treat Mom for her Special Day!</p>
    <p>
      Buy a giftcard of $125 or more <br />
      Get Mom a <strong>Free Gift Bag</strong>!
    </p>
    <p>This special wont last long, grab them before May 13th!</p>
    <p></p>
  </p>
);

export default function EstheticSale(props) {
  return (
    <>
      <Alert variant="warning">
        <div className="width1024 packageBanner">
          <section className="bannerHeader">
            <Alert.Heading>
              Mothers Day Sale going on Now!
              {/* <span className="closeBanner">X</span> */}
            </Alert.Heading>
          </section>

          {Sale}

          <hr />
          <p>Buy online through IntakeQ or contact us using the links below</p>
          <p>
            Please email{' '}
            <Alert.Link href="mailto:support@arcmassageandwellness.com?subject=To ARC Massage and Wellness - Packages">
              support@arcmassageandwellness.com
            </Alert.Link>{' '}
            or call/text{' '}
            <Alert.Link href="tel:2064753574">(206) 475-3574</Alert.Link> for
            more information
          </p>
        </div>
      </Alert>
    </>
  );
}

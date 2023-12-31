import { Alert } from 'react-bootstrap';

let Sale = (
  <p>
    <p>
      We are pleased to welcome our new <strong>Esthetician, Maya</strong>!
    </p>
    <p>
      Recieve a <strong>FREE</strong> brow wax on us when you purchase a facial
      with a value of $150 or more
    </p>
    <p>This special wont last long, grab them before April 26th!</p>
    <p>
      Check our full lineup of our new esthecian services!
      {/* Link to estiticiation page? */}
    </p>
  </p>
);

export default function EstheticSale(props) {
  return (
    <>
      <Alert variant="warning">
        <div className="width1024 packageBanner">
          <section className="bannerHeader">
            <Alert.Heading>Now Offering Esthetician Services</Alert.Heading>
          </section>

          {Sale}

          <hr />
          <p>Buy online through IntakeQ or contact us using the links below</p>
          <p>
            Please email{' '}
            <Alert.Link href="mailto:support@arcmassageandwellness.com?subject=To ARC Massage and Wellness - Packages">
              support@arcmassageandwellness.com
            </Alert.Link>{' '}
            or call{' '}
            <Alert.Link href="tel:2064753574">(206) 475-3574</Alert.Link> for
            more information
          </p>
        </div>
      </Alert>
    </>
  );
}

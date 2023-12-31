import { Alert } from 'react-bootstrap';
export default function GiftCards(props) {
  return (
    <>
      <Alert variant="warning">
        <div className="packageBanner">
          <Alert.Heading>Give the Perfect Gift!</Alert.Heading>

          <p>
            Purchase a giftcard as the perfect present to de-stress from the
            holidays
          </p>

          <div className="giftCardButton">
            <a
              href="https://squareup.com/gift/ML6ZJCA3WQT2V/order"
              target="_blank"
              rel="noreferrer"
              alt="Buy a giftcard button"
              className="bookAppLink "
            >
              Purchase Now
            </a>
          </div>

          <hr />
          <p>Buy online through Square or contact us using the links below</p>

          <p>
            Please email{' '}
            <Alert.Link href="mailto:support@arcmassageandwellness.com?subject=To ARC Massage and Wellness - Gift Cards">
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

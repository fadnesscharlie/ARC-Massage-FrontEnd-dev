import { Alert } from 'react-bootstrap';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import { useState } from 'react';

import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion';

export default function PackageSale(props) {
  const [expand, setExpand] = useState(false);

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      setExpand(expand ? false : true);
    });

    return (
      <div
        type="div"
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  }

  let JanuarySale = (
    <p className="topBannerInfo">
      <p>
        Buy 5 massages and get <strong>two</strong> free!
      </p>
      <p>This wont last long, grab them before January 14th!</p>
      <p>
        Buy 5 massages and get, wait for it, <strong>two</strong> free!
      </p>
    </p>
  );

  return (
    <>
      <Accordion
        className="bannerBox"
        flush
        defaultActiveKey={['0']}
        alwaysOpen
      >
        <CustomToggle eventKey="0" className="bannerTitle">
          <div className="bannerTitle">
            Our Packages are on Sale!{' '}
            <span
              className={expand ? 'bannerOpen ' : 'closedBanner'}
              onClick={() => setExpand(expand ? false : true)}
            >
              <UnfoldMoreIcon sx={{ fontSize: 25 }} />
            </span>
            <span
              className={expand ? 'closedBanner' : 'bannerOpen'}
              onClick={() => setExpand(expand ? false : true)}
            >
              <UnfoldLessIcon sx={{ fontSize: 25 }} />
            </span>
          </div>
        </CustomToggle>
        <Accordion.Collapse eventKey="0">
          <div className="bannerBody">
            <hr />
            {JanuarySale}
            <hr />
            <p>
              Buy online through IntakeQ or contact us using the links below
            </p>
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
        </Accordion.Collapse>
      </Accordion>
    </>
  );
}

// let OctoberSale = (
//   <p>
//     <p>
//       Normally our packages are only buy 5 massages, get <strong>one</strong>{" "}
//       free, we are running a sale until the <strong>31st of October </strong>
//       for:
//     </p>
//     <p>
//       Buy 5 massages and get, wait for it, <strong>two</strong> free!
//     </p>
//   </p>
// );

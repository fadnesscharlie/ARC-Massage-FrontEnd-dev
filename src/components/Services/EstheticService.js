import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { db, sectionTitles } from './db/estheticDB';
import './services.css';
import { Tab, Tabs } from 'react-bootstrap';

export default function EstheticServices(props) {
  const basicMassage = (service) => {
    let result = db.filter((filter) => filter.type === service);
    let finalResult = result.map((el, idx) => {
      return (
        <Grid item key={idx} className="sessionWidthGrid">
          {el.img ? (
            <img className="cardImage" src={el.image} alt="data" />
          ) : (
            ''
          )}
          {/* CSS Below removes space for an image */}
          <Card className="cardEsthetics" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.title}
              </Typography>
              <Typography>{el.addOn && el.addOn}</Typography>
              <Typography variant="body2" color="text.secondary">
                {Array.isArray(el.bio) ? el.bio.map((el) => el) : el.bio}
              </Typography>
            </CardContent>
            <CardActions>
              <div className="priceButton">
                {el.addOn && '+'}${el.cost}
              </div>
            </CardActions>
          </Card>
        </Grid>
      );
    });
    return finalResult;
  };

  let serviceTabs = sectionTitles.map((el, idx) => (
    <Tab key={idx} eventKey={el.title} title={el.title} tabClassName="tab">
      <div className="serviceDescriptions">{el.description}</div>
      <Grid container spacing={2} className="gridContainer">
        {basicMassage(el.title)}
      </Grid>
    </Tab>
  ));

  return (
    <div className="serviceContainer">
      <div>
        <Tabs
          defaultActiveKey="Facial"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          {serviceTabs}
        </Tabs>
      </div>
    </div>
  );
}

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

import { Tab, Tabs } from 'react-bootstrap';
import { db } from '../db/db';

export default function MassageServices(props) {
  const basicMassage = (service) => {
    let result = db.filter((filter) => filter.type === service);

    let finalResult = result.map((el, idx) => {
      return (
        <Grid item key={idx} className="sessionWidthGrid">
          <img className="cardImage" src={el.image} alt="data" />
          <Card className="card" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.title}
              </Typography>
              <Typography>{el.addOn && el.addOn}</Typography>
              <Typography variant="body2" color="text.secondary">
                {el.bio}
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
  return (
    <>
      <Tabs
        defaultActiveKey="basic"
        id="uncontrolled-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="basic" title="Massage" tabClassName="tab">
          <Grid container spacing={2} className="gridContainer">
            {basicMassage('basic')}
          </Grid>
        </Tab>
        {/* <Tab eventKey="lymphatic" title="Lymphatic" tabClassName="tab">
          <Grid container spacing={2} className="gridContainer">
            {basicMassage('lymphatic')}
          </Grid>
        </Tab> */}
        <Tab eventKey="prenatal" title="Prenatal" tabClassName="tab">
          <Grid container spacing={2} className="gridContainer">
            {basicMassage('prenatal')}
          </Grid>
        </Tab>
        <Tab eventKey="Medical" title="Medical" tabClassName="tab">
          <Grid container spacing={2} className="gridContainer">
            {basicMassage('medical')}
          </Grid>
        </Tab>
        {/* <Tab eventKey="breast/Chest" title="Breast/Chest" tabClassName="tab">
          <Grid container spacing={2} className="gridContainer">
            {basicMassage('cupping')}
          </Grid>
        </Tab> */}
        {/* <Tab eventKey="Postnatal" title="Postnatal" tabClassName="tab">
          <Grid container spacing={2} className="gridContainer">
            {basicMassage('cupping')}
          </Grid>
        </Tab> */}
        <Tab eventKey="enhancement" title="Enhancements" tabClassName="tab">
          <Grid container spacing={2} className="gridContainer">
            {basicMassage('enhancement')}
          </Grid>
        </Tab>
      </Tabs>
    </>
  );
}

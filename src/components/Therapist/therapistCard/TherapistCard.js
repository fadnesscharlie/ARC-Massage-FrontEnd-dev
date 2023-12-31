import { Grid } from '@mui/material';
import './therapistCard.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function TherapistCard({ el }) {
  const { name, bio, services, licenses, image} = el;

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 1150,
        md: 1250,
        lg: 1536,
        // xl: 1600,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <section className="therapistSection">
        <Grid container columns={15}>
          <Grid item xs={15} sm={6} md={6} lg={6} xl={3}>
            <div className='therapistImgBox'>
              
            <img src={image} alt="portrait" className="therapistImg" />
            </div>
          </Grid>
          <Grid item xs={15} sm={6.5} md={6.5} lg={6.5} xl={10}>
            <section className="therapistInfo">
              <div className="therapistName">{name}</div>
              <div className="therapistCardLicense">
                Licenses:{' '}
                {licenses.map((el, idx) => (
                  <span key={idx}>{el} </span>
                ))}
              </div>
            </section>
            <div className="TherapistBio">
              {/* {bio} */}
              {Array.isArray(bio)
                ? bio.map((el) => <div className="bioSpace">{el}</div>)
                : bio}
            </div>
          </Grid>
          <Grid item xs={15} sm={2} md={2} lg={2} xl={2}>
            <section className="therapistServiceSection">
              <section>Services:</section>
              <section>
                {services.map((el, idx) => (
                  <div className='services' key={idx}>{el} </div>
                ))}{' '}
              </section>
            </section>
          </Grid>
        </Grid>
      </section>
    </ThemeProvider>
  );
}

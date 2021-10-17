import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import University from '../components/universities/University';
import { makeStyles } from "@material-ui/core/styles";
import ModuleSearch from '../components/searchBar/ModuleSearch';

import studybanner from '../assets/studybanner.jpg'
import { HomeSharp } from '@mui/icons-material';
// /Volumes/KongV2/Startup_RevEd/Dev/RevEd/app/

const theme = createTheme();

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  },
  container: {
    backgroundColor: 'black',
  },
  banner: {
    opacity: 0.7,
    width: '100%',
    height: '350px',
    objectFit: 'cover'
  },
  searchbar: {
    zIndex: 100,
    position: 'absolute',
    left: '20px',
    top: '30px',
    backgroundColor: 'white'
  }
});

const HomePage = () => {
  const [universities, setUniversities] = useState([]);
  const [reviewcounts, setReviewcounts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    axios.get("/api/v1/universities.json")
      .then(res => {
        setUniversities(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
  }, [universities.length])

  useEffect(() => {
    axios.get("/api/v1/reviewcounts.json")
      .then(res => {
        setReviewcounts(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
  }, [reviewcounts.length])

  // console.log(reviewcounts["Warwick University"])
  const Test = ["https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/Pictures/web/y/d/t/the-university-of-warwick-logo-2015.jpg?itok=VQ2a0l-F", "https://www.universitytranscriptions.co.uk/wp-content/uploads/University-of-Bristol.png"]

  // console.log(universities[0], "test")
  // console.log(options2, "op2")
  console.log('hi')
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >
      {/* <CssBaseline/> */}

      <main>
        <>
        <section className={classes.container}>
        
          <img className={classes.banner} src={studybanner} />
          
        </section>
        {/* <Container maxWidth="sm"> */}
            <ModuleSearch className={classes.searchbar}/>
          {/* </Container> */}
          </>
        



        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 2,
            bgcolor: 'text.disabled'
          }}
        >
          <Container maxWidth="sm" >
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Participated Universities
            </Typography>
          </Container>
        </Box>
        <Box sx={{ bgcolor: 'text.disabled' }} >
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

            {universities.slice(0, 6).map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                {/* <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}> */}
                  {/* <CardMedia component="img" alt="green iguana" height="140" image= {Test[Math.floor(Math.random()*Test.length)]} /> */}
                <Avatar alt="Remy Sharp" sx={{ width: 200, height: 200 }} style={{ margin: "0 auto" }} src={Test[Math.floor(Math.random() * Test.length)]}></Avatar>
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                      {card.name}
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                      Reviews: {reviewcounts[card.id]}
                    </Typography>
                  </CardContent>
                <CardActions>
                  <Button size="small" style={{ margin: "0 auto" }}>
                    <a href={`/universities/${card.id}`} style={{ textDecoration: 'none' }}> View </a>
                    {/* <Link to={`/universities/${card.id}`} style={{ textDecoration: 'none' }}> View </Link> */}
                  </Button>

                    {/* <Link href="/universities/1" underline="none">View</Link> */}
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                {/* </Card> */}
              </Grid>
            ))}
          </Grid>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">See all universities</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
        </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default HomePage

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Image } from 'cloudinary-react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import ModuleSearch from '../components/searchBar/ModuleSearch';

import studybanner from '../assets/studybanner.jpg'
import HowTo from '../components/home/HowTo';
import Footer from '../components/Footer';
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
  button: {
    border: '2px solid grey'
  },
  img: {
    // borderRadius: '50%',
    objectFit: 'fill',
    cursor: 'pointer',
    height: 150,
    width: '100%',
    margin: 'auto',
    padding: 'auto',
    textAlign: "center",
    // border: '1px solid black'
  },
  item: {
    // border: '1px solid black'
    padding: '1em'
  },
  banner: {
    opacity: 0.7,
    width: '100%',
    height: '300px',
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
  const [checkenv, setcheckenv] = useState([]);
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

  useEffect(() => {
    axios.get("/api/v1/checkenv")
      .then(res => {
        setcheckenv(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
  }, [checkenv.length])

  if (checkenv) {
    var environment = "development"
  } else {
    var environment = "production"
  }

  console.log(environment)

  const Test = ["https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/Pictures/web/y/d/t/the-university-of-warwick-logo-2015.jpg?itok=VQ2a0l-F", "https://www.universitytranscriptions.co.uk/wp-content/uploads/University-of-Bristol.png"]

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >

      <main>
        <>
          <section className={classes.container}>
            <img className={classes.banner} src={studybanner} />
          </section>
          <ModuleSearch className={classes.searchbar}/>
        </>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 2,
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
        <Box >
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}>

            {universities.slice(0, 6).map((card) => (
              <Grid
              className={classes.item} item key={card.id} xs={12} sm={6} md={4}>
                  {/* <Avatar sx={{ width: 200, height: 200 }} style={{ margin: "0 auto" }}> */}
                  <a href={`/universities/${card.id}`} style={{ textDecoration: 'none' }}>
                  <Card sx={{ width: '100%' }}>
                    <CardActionArea>
                      <Image
                    className={classes.img}
                    cloudName="le-wagon-tokyo"
                    publicId ={`https://res.cloudinary.com/le-wagon-tokyo/image/upload/v1633890329/${environment}/${card.photo_key}`}
                    />
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                      {card.name}
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                      Reviews: {reviewcounts[card.id]}
                    </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  </a>
                  {/* <CardContent sx={{ flexGrow: 1, justifyContent: 'center' }}> */}

                 {/* </Avatar> */}

                  {/* </CardContent>
                <CardActions>
                  <Button size="small" style={{ margin: "0 auto" }}>
                    <a href={`/universities/${card.id}`} style={{ textDecoration: 'none' }}> View </a>
                  </Button>
                  </CardActions> */}
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
              <Button className={classes.button} variant="outlined">See all universities</Button>
            </Stack>
        </Container>
        </Box>
      </main>
      <Box>
        <HowTo />
      </Box>

      {/* Footer         */}
      <Footer/>

    </ThemeProvider>
  );
}

export default HomePage

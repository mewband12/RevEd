// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import University from './University';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import UniversitySearch from '../searchBar/UniversitySearch';
// import { Container } from '@mui/material';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
  }
});

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const [reviewcounts, setReviewcounts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
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

  React.useEffect(() => {
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

  const list = universities.map(item => {
    // console.log(item.name)
    // return (<li key={item.name}>{item.name}</li>)
    return (< University key={item}></University>)
  })

  // console.log(reviewcounts["Warwick University"])
  const Test = ["https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/Pictures/web/y/d/t/the-university-of-warwick-logo-2015.jpg?itok=VQ2a0l-F", "https://www.universitytranscriptions.co.uk/wp-content/uploads/University-of-Bristol.png"]

  // console.log(universities[0], "test")
  // console.log(options2, "op2")
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>

      <main>
        <Container maxWidth="sm">
          <UniversitySearch/>
        {/* <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={topFilms}
          disableCloseOnSelect
          getOptionLabel={(optiony) => optiony.title}
          renderOption={(optiony) => (
            <React.Fragment>
              {optiony.title}
              s
            </React.Fragment>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
          )}
        />
        <Autocomplete
          id="autocmplete-clickable"
          style={{ width: 300 }}
          key = "t1"
          options={topFilms}
          classes={{
            option: classes.option
          }}
          autoHighlight
          getOptionLabel={(option) => option.title}
          renderOption={(option) => (
            <React.Fragment>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.location.href = "universities/1";
                }}
                key = {option.link}
              >
                Clickable link {option.title} {option.year}
              </span>
            </React.Fragment>
          )}
          renderInput={params => (
            <TextField {...params} label="label" variant="outlined" />
          )}
        />

        <Autocomplete
          id="asynchronous-demo"
          key= "t2"
          sx={{ width: 300 }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          options={options}
          loading={loading}
          // renderOption={(option) => (
          //   <React.Fragment>
          //     <span
          //       style={{ cursor: "pointer" }}
          //       onClick={() => {
          //         window.location.href = "/universities/1";
          //       }}
          //       key={option.link}
          //     >
          //       test
          //     </span>
          //   </React.Fragment>
          // )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Asynchronous"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment onClick={() => {
                    window.location.href = "universities/1";
                  }}>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        /> */}
        </Container>



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

export default Universities

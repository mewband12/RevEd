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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  const [universities, setUniversities] = useState([]);
  const [reviewcounts, setReviewcounts] = useState([]);
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
    return (<li key={item.name}>{item.name}</li>)
  })

  console.log(reviewcounts["Warwick University"])
  const Test = ["https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/Pictures/web/y/d/t/the-university-of-warwick-logo-2015.jpg?itok=VQ2a0l-F", "https://www.universitytranscriptions.co.uk/wp-content/uploads/University-of-Bristol.png"]

  // console.log(universities[0], "test")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {universities.slice(0, 6).map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia component="img" alt="green iguana" height="140" image= {Test[Math.floor(Math.random()*Test.length)]} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      Reviews: {reviewcounts[card.name]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
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
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

// export default function ImgMediaCard() {
//   return (
//   <Card sx={{ maxWidth: 345 }}>
//     <CardMedia component="img" alt="green iguana" height="140" image="/static/images/cards/contemplative-reptile.jpg" />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div"> Lizard </Typography>
//         <Typography variant="body2" color="text.secondary"> Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>); }
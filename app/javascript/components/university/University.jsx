import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function University(id) {
  const [expanded, setExpanded] = React.useState(false);
  const [ University, setUniversity ] = useState({});
  const [ Departments, setDepartments ] = useState([]);
  const [reviewdepcounts, setReviewcounts] = useState([]);

  // this.id.history.push("/departments/:id", {state: id.id})

  useEffect(()=>{
    // console.log(id, "mew")
    axios.get(`/api/v1/universities/${id.id}`)
      .then(res => {
        setUniversity(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
    // api/v1/universities/1
    // universities/1

  }, [[ University.length]])

  useEffect(() => {
    axios.get("/api/v1/departments.json")
      .then(res => {
        setDepartments(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
  }, [Departments.length])

  function department_filtered(uni_id) {
    var arr = []
    for (var i = 0; i < Departments.length; i++) {
      if (Departments[i]["university_id"] == uni_id) {
        arr.push(Departments[i])
      }
    }
    return arr
  }

  // console.log(department_filtered(2))

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios.get("/api/v1/reviewdepcounts.json")
      .then(res => {
        setReviewcounts(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
  }, [reviewdepcounts.length])
  // console.log(Departments)
  return (
    <div>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
        <Grid item xs={12} sm={6} md={4}>
        <Container sx={{ py: 2 }} maxWidth="md">
          <Card sx={{ maxWidth: 345 }} >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title= {University.name}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <a href="/"> home </a>
                {University.name}test
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                  aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                  medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                  occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                  large plate and set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                  stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and
                  peppers, and cook without stirring, until most of the liquid is absorbed,
                  15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                  mussels, tucking them down into the rice, and cook again without
                  stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Container>
          <Box
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            <Container maxWidth="sm" >
              <Typography
                variant="h5"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {department_filtered(id.id).length} departments
              </Typography>
            </Container>
          </Box>
      </Grid>
    </Grid>



    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
    <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
          {department_filtered(id.id).slice(0, Departments.length).map((department) => (
      <ListItem key = {department.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText

          primary={
              <Link to={{
                pathname: `/departments/${department.id}`,
                state: {
                  uni: id
                }
                }}>
          {department.name}
          </Link>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {department.description}
              </Typography>
              " — reviews:" {reviewdepcounts[department.id]}
              <Link to={{
                pathname: `/departments/${department.id}`,
                state: {
                  uni: id
                }
                }}>Create Idea</Link>
            </React.Fragment>
          }
        />
      </ListItem>
      ))}
          {/* <Divider variant="inset" component="li" /> */}
    </List>
    </Grid>
    </div>
  );
}

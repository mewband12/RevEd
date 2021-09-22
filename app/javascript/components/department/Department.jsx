import React, { useState, useEffect } from 'react'
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
  const [University, setUniversity] = useState({});
  const [Department, setDepartment] = useState([]);
  const [Modules, setModules] = useState([]);
  // const [reviewdepcounts, setReviewcounts] = useState([]);

  useEffect(() => {
    // console.log(id, "mew")
    axios.get(`/api/v1/universities/${id.id}`)
      .then(res => {
        setUniversity(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
    // api/v1/universities/1
    // universities/1

  }, [[University.length]])

  useEffect(() => {
    axios.get(`/api/v1/departments/${id.id}`)
      .then(res => {
        setDepartment(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
  }, [Department.length])

  useEffect(() => {
    axios.get(`/api/v1/mods`)
      .then(res => {
        setModules(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
  }, [Modules.length])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // console.log(Modules, University)

  return (
    <div>
      <Container maxWidth="sm" >
        <Typography
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {Department.name}, {University.name}
        </Typography>
      </Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
          {Modules.slice(0, Modules.length).map((department) => (
            <ListItem key={department.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText

                primary={<a href={`/mods/${department.id}`}> {department.name} </a>}
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
                    " — reviews:"
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

import { TextField, Button } from '@mui/material';
import { Result } from 'postcss';
import React, { useState, useEffect } from 'react'
import { Modal, Form } from 'react-bootstrap';
// import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';

export default function Forms(props) {
  const [Reviews, setReviews] = useState({});
  const [User, setUser] =useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // console.log(id, "mew")
    axios.get(`/api/v1/users/`)
      .then(res => {
        console.log(res.data["id"], "resid")
        // var userid = res.data["id"]
        setUser(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
    // api/v1/universities/1
    // universities/1

  }, [])
  // console.log(Users, "lol")

  useEffect(() => {
    // console.log(id, "mew")
    axios.get(`/api/v1/mods/${props.id}/reviewscomment`)
      .then(res => {
        setReviews(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
    // api/v1/universities/1
    // universities/1

  }, [])
  // console.log(props.id, "check")
  var ids = [];

  // if (User.id !== undefined) {
  //   // console.log(Users, 'testing')
  //   users.push(User.id)
  //   // console.log("passed")
  //   // console.log(userid, "userid")
  // }

  // if (User.id === 'undefined') {
  //   // console.log(Reviews, 'testing')
  //   var Userid = 1
  // } else {
  //   var Userid = User.id
  // }

  // if (props.user !== {}) {
  //   var userid = props.user.id
  //   console.log(props.user, "propsuser")
  // }

  // var userid = 2
  var userid = 1

  if (Object.keys(Reviews).length !== 0) {
    // console.log(Reviews, 'testing')
    Reviews.forEach(element => {
      ids.push(element.id);
  })
  }

  var review_id = Math.max(...ids)

  console.log(review_id, "reviewid")
  var initialReview = {
    id: review_id + 1,
    rating: 2,
    review: '',
    grade: 0,
    mod_id: props.id,
    user_id: userid,
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
    before_grade: 0,
    hourly_input: 0,
    exm_difficulty: 2,
    nature: 3,
    learning_approach: "USD",
    personality: "test"
  }

  const [review, setReview] = React.useState(initialReview)

  const handleLogin = e => {
    e.preventDefault()
    axios.post(`/api/v1/mods/${props.id}/reviews`, review)
      .then(result => {
        console.log(result)
      })
      .catch(err => alert(err))
      // console.log(review)
      window.location.reload(false)
  }
  const handleChange = e => {
    const value = e.target.value
    setReview({
      ...review,
      [e.target.name]: value
    })
  }

  const marks = [
    {
      value: 5,
      label: '5 hr/week',
    },
    {
      value: 40,
      label: '40 hr/week',
    },
  ];
  const nature = [
    {
      value: 1,
      label: 'Theoretical',
    },
    {
      value: 9,
      label: 'Practical',
    },
  ];

  const approaches = [
    {
      value: 'USD',
      label: 'a',
    },
    {
      value: 'EUR',
      label: 'b',
    },
    {
      value: 'BTC',
      label: 'c',
    },
    {
      value: 'JPY',
      label: 'd',
    },
  ];

  function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }


  return (
<>
<Button variant="primary" onClick={handleShow}>
  Launch demo modal
</Button>

<Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Woohoo, you're reading this text in a modal!
    <form onSubmit={handleLogin}>
      <Typography component="legend">Rate the Module</Typography>
      <Rating
        name="rating"
        value={review.rating}
        onChange={handleChange}
      />
      <TextField
        name="review"
        value={review.review}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        margin ="normal"
        label="review"
        variant = "filled"
      />
      <TextField
        name="grade"
        value={review.grade}
        onChange={handleChange}
        margin ="normal"
        label="grade"
        variant = "standard"
      />
      <TextField
        name="before_grade"
        value={review.before_grade}
        onChange={handleChange}
        margin ="normal"
        label="before_grade"
        variant = "standard"
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Hourly input</Typography>
      <Slider
        name = "hourly_input"
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent,
        }}
        aria-label="custom thumb label"
        defaultValue={20}
        onChange={handleChange}
        marks = {marks}
        value={review.hourly_input}
        max = {45}
            />
      {/* <TextField
        name="exm_difficulty"
        value={review.exm_difficulty}
        onChange={handleChange}
        fullWidth
        margin ="normal"
        label="exm_difficulty"
      /> */}
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Exam difficulty</Typography>
      <Slider
        name="exm_difficulty"
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent,
        }}
        aria-label="custom thumb label"
        defaultValue={3}
        onChange={handleChange}
        value={review.exm_difficulty}
        max={10}
      />
      <Typography gutterBottom>Nature of the module</Typography>
      <Slider
        name="nature"
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent,
        }}
        aria-label="custom thumb label"
        defaultValue={3}
        onChange={handleChange}
        value={review.nature}
        marks={nature}
        max={10}
      />
      {/* <TextField
        name="nature"
        value={review.nature}
        onChange={handleChange}
        fullWidth
        margin ="normal"
        label="nature"
      /> */}
      <TextField
        name="learning_approach"
        value={review.learning_approach}
        onChange={handleChange}
        fullWidth
        select
        margin ="normal"
        label="learning_approach"
        helperText="Please select"
      >
        {approaches.map((option)=> (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </form>
    </Modal.Body>
  </Modal>
</>
  )

}

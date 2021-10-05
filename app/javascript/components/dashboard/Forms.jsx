import { TextField, Button } from '@mui/material';
import { Result } from 'postcss';
import React, { useState, useEffect } from 'react'
import { Modal, Form } from 'react-bootstrap';
// import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

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
  var userid = 2

  if (Object.keys(Reviews).length !== 0) {
    // console.log(Reviews, 'testing')
    Reviews.forEach(element => {
      ids.push(element.id);
  })
  }

  var review_id = Math.max(...ids)


  var initialReview = {
    id: review_id + 1,
    rating: '',
    review: '',
    grade: '',
    mod_id: props.id,
    user_id: userid,
    create_at: new Date().toString(),
    updated_at: new Date().toString(),
    before_grade: "65",
    hourly_input: "10",
    exm_difficulty: "8",
    nature: "asd",
    learning_approach: "asd"
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
      <TextField
        name="rating"
        value={review.rating}
        onChange={handleChange}
        label="rating"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
      <TextField
        name="review"
        value={review.review}
        onChange={handleChange}
        label="review"
      />
      <TextField
        name="grade"
        value={review.grade}
        onChange={handleChange}
        label="grade"
      />
      {/* <TextField
        name="mod_id"
        value={review.mod_id}
        onChange={handleChange}
        label="modid"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
      <TextField
        name="user_id"
        value={review.user_id}
        onChange={handleChange}
        label="userid"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      /> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </form>
    </Modal.Body>
  </Modal>
</>
  )

}

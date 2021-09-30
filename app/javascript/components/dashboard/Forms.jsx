import { TextField, Button } from '@mui/material';
import { Result } from 'postcss';
import * as React from 'react';
// import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

export default function Forms() {
  const initialReview = {
    id: 11,
    rating: 2,
    review: '',
    grade: '',
    mod_id: 1,
    user_id: 1,
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
    axios.post("/api/v1/mods/1/reviews", review)
      .then(result => {
        console.log(result)
      })
      .catch(err => alert(err))
      console.log(review)
  }
  const handleChange = e => {
    const value = e.target.value
    setReview({
      ...review,
      [e.target.name]: value
    })
  }
  return (
    <form onSubmit={handleLogin}>
      <TextField
        name="id"
        value={review.id}
        onChange={handleChange}
        label="id"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
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
      <TextField
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
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  )

}

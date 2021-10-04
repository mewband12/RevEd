import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button, Modal, Form } from 'react-bootstrap';
import Forms from './Forms';

// Generate Order Data
export default function Orders(props) {
const [Reviews, setReviews] = useState({});
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

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


console.log(Reviews)

function createData(id, review, grade, before_grade, rating, hourly_input, exm_difficulty) {
  return { id, review, grade, before_grade, rating, hourly_input, exm_difficulty};
}
const rows = []

Array.prototype.forEach.call(Reviews, review => {
  rows.push(createData(review["id"], review["review"], review["grade"], review["before_grade"], review["rating"], review["hourly_input"], review["exm_difficulty"]))
});




function preventDefault(event) {
  event.preventDefault();
}
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>review</TableCell>
            <TableCell>Grade </TableCell>
            <TableCell>rating</TableCell>
            <TableCell>before grade</TableCell>
            <TableCell>hourly input</TableCell>
            <TableCell>exam difficulty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.review}</TableCell>
              <TableCell>{row.grade}</TableCell>
              <TableCell>{row.before_grade}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.hourly_input}</TableCell>
              <TableCell>{row.exm_difficulty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Forms id = {props.id} />

    </React.Fragment>
  );
}

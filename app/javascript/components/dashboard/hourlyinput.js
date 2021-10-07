import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';




function preventDefault(event) {
  event.preventDefault();
}

export default function Hourlyinput(props) {
  const [summary, setSummary] = useState(false);
  useEffect(() => {
    // console.log(id, "mew")
    axios.get(`/api/v1/mods/${props.mod_id}/reviewsummary1`)
      .then(res => {
        setSummary(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
  }, [])
  console.log(summary, props.mod_id)

  return (
    <React.Fragment>
      <Title>Average Hourly Input</Title>
      <Typography component="p" variant="h4">
        {Math.round(summary.hourly_input)} hours/week
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}

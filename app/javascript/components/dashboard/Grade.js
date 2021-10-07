import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';




function preventDefault(event) {
  event.preventDefault();
}

export default function Grade(props) {
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

  function classification(mark) {
    var output;
    if (mark >= 70) {
      output = "1st Class Honours"
    } else if (mark >= 60) {
      output = "2nd Class Honours, upper division"
    } else if (mark >=50) {
      output = "2nd Class Honours, lower division"
    } else if( mark>=40 ) {
      output ="3rd Class honours"
    } else {
      output ="failed"
    }
    return output
  }
  return (
    <React.Fragment>
      <Title>Average Grade achieved</Title>
      <Typography component="p" variant="h4">
        {Math.round(summary.grade)}% ({classification(summary.grade)})
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

// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import Department from './department/Department';
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

const Review = (props) => {
  console.log(props)
  const id = props.match.params.id
  return (
    <div>
      <Department id={id} />
    </div>
  )
}

export default Review

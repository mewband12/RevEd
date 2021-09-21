// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import University from './university/University';
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

const Department = (props) => {
  const id = props.match.params.id
  return (
    <div>
      <University id ={id}/>
    </div>
  )
}

export default Department

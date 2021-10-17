// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import University from '../components/university/University';
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

const DepList = (props) => {
  // console.log(this.id)
  const id_uni = props.match.params.id
  return (
    <div>
      <University id ={id_uni}/>
    </div>
  )
}

export default DepList

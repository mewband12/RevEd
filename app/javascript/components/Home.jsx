// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import Universities from './universities/Universities'
// import University from './university/University';
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

const Home = (props) => {
  console.log(props)
  return (
    <div>
      <Universities/>
    </div>
  )
}

export default Home

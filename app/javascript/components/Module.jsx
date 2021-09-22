// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import Department from './department/Department';
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
import { useLocation } from "react-router-dom";
// const theme = createTheme();

const Module = (props) => {
  const location = useLocation()
  const id_uni = location.state.uni.id
  console.log(useLocation())
  // var uni = require('./Department')
  // console.log(uni)
  const id_dep = props.match.params.id
  return (
    <div>
      <Department id_dep={id_dep} id_uni ={id_uni} />
    </div>
  )
}

export default Module

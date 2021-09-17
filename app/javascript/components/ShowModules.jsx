import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'

const showModules = () => {
  const [universities, setUniversities] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    axios.get("/api/v1/universities.json")
    .then( res => {
      setUniversities(res.data)
      console.log(res)
    })
     .catch(res => console.log(res))
  }, [universities.length])

  const list = universities.map (item => {
    // console.log(item.name)
    return (<li key={item.name}>{item.name}</li>)
  })

  return (
    <Fragment>
      <div> asd </div>
      <ul>{list}</ul>
    </Fragment>
  )

}

export default showModules

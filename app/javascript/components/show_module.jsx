import React, { useState } from 'react'

const ShowModules = (props) => {
  //Assume props.module is Object {mod: '', desc: ''}
  const inputModule = props.module
  const [modules, setModule] = useState([])

  setModule(inputModule)
  return (
    <div>
      <h1>Module</h1>
    </div>
  )
}

export default ShowModules

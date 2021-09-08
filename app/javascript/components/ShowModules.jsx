import React, { useEffect, useState } from 'react'
import axios from 'axios'

const showModules = () => {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStuff() {
      await axios.get("/api/v1/universities")
     .then(res => setItems(res.data))
     .catch(
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setLoading(false)
        setError(true)
        console.log(error)
      }
    )
    }
    // fetchStuff().then(setLoading(false))
    fetchStuff()
    // console.log(items)
  }, [])
  console.log(items)
  if (error) {
    return <div>Error</div>;
  } else if (loading) {
    console.log(items)
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) =>
          <li key={item.id}>
            {item}
          </li>
        )}
      </ul>
    );
  }
}

export default showModules

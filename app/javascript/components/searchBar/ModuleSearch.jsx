import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    width: '100%',
    paddingLeft: '15px'
  }
})


export default function ModuleSearch() {
  const [universities, setUniversities] = useState([]);
  const classes = useStyles()

  useEffect(() => {
    // console.log(id_dep.id_dep, id_dep.id_uni)
    // console.log(id_uni)
    axios.get(`/api/v1/universities/`)
      .then(res => {
        setUniversities(res.data)
        // console.log(res)
      })
      .catch(res => console.log(res))
    // api/v1/universities/1
    // universities/1

  }, [])

  console.log(universities, "universities")

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        // value={}
        id="free-solo-2-demo"
        disableClearable
        options={universities}
        getOptionLabel={(option) => (option.modCode)}
        renderOption={(props, option) => (
          <React.Fragment>
            <Button
              style={{justifyContent: "flex-start"}}
              className={classes.button}
              onClick={() => {
                window.location.href = `universities/${option.id}`;
              }}
            >
              {option.name}
            </Button>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const ModuleList = [
  { modCode: 'CS342', modName: 'OS and Network', link: '/universities/1'},
  { modCode: 'CS242', modName: 'HEEEE', link: '/universities/2'},
  { modCode: 'CS322', modName: 'JUYU', link: '/universities/3'},
  { modCode: 'CS312', modName: 'OS and Network', link: '/universities/4'},
  { modCode: 'CS345', modName: 'OS and Network', link: '/universities/1'},
  { modCode: 'CS332', modName: 'OS and Network', link: '/universities/1'},
  { modCode: 'CS142', modName: 'OS and Network', link: '/universities/1'},
  { modCode: 'CS112', modName: 'OS and Network', link: '/universities/1'},
  { modCode: 'CS132', modName: 'OS and Network', link: '/universities/1'},
  { modCode: 'CS442', modName: 'OS and Network', link: '/universities/1'},
  { modCode: 'CS372', modName: 'OS and Network', link: '/universities/1'},

];

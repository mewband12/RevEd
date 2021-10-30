import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    width: '100%',
    paddingLeft: '15px'
  },
  searchbar: {
    zIndex: 100,
    width: '30%',
    position: 'absolute',
    borderRadius: 10,
    left: '30%',
    top: '20%',
    backgroundColor: 'white'
  }
})

export default function ModuleSearch() {

  const classes = useStyles()

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        className={classes.searchbar}
        freeSolo
        // value={}
        id="free-solo-2-demo"
        disableClearable
        options={ModuleList}
        getOptionLabel={(option) => (option.modCode)}
        renderOption={(props, option) => (
          <React.Fragment>
            <Button
              style={{justifyContent: "flex-start"}}
              className={classes.button}
              onClick={() => {
                window.location.href = option.link;
              }}
            >
              {option.modCode} - {option.modName}
            </Button>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for modules..."
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
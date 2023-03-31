import { Search } from '@mui/icons-material'
import { Autocomplete, FormControl, FormHelperText, InputAdornment, OutlinedInput, TextField } from '@mui/material'
import ContactDetails from "../../../db/Dummy_data";
import React from 'react'
import { Stack } from '@mui/system';

const Searchbar = () => {
  return (
    <>
    <Stack spacing={2}>
    <Autocomplete sx={{textAlign:'left', width:'300px', margin:' 0.5em'}}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={ContactDetails.map((option) => option.name)}
        renderInput={(params) => (
          <TextField 
            {...params}
            label="Contact name"
            
            InputProps={{
              ...params.InputProps,
              type: 'search',
              endAdornment:<Search />
            //   <InputAdornment position="start">kg</InputAdornment>
            }}
           
            // endAdornment={<Search />}
           
            />
        )}
        
      />
    </Stack>

    </>
  )
}

export default Searchbar
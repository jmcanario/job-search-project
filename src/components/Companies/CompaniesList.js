import { Stack } from '@mui/system'
import React from 'react'
import CompaniesCard from './CompaniesCard'
import Companies from "../../db/Dummy_companies";
import { Chip } from '@mui/material';

const CompaniesList = () => {
  return (
    <Stack spacing={2} direction='row'>

{Companies.map((companiesItem) => {
        return (
          <CompaniesCard
          key={companiesItem.id}
            name={companiesItem.name}
            type={companiesItem.type}
            city={companiesItem.city}
            address={companiesItem.address}
            fields={companiesItem.fields.map((field) => {
              return <Chip label={field} />
            })}
            
          />
          
        );
      })}
    </Stack>
  )
}

export default CompaniesList
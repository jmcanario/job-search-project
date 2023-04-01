import { Stack } from '@mui/system'
import React from 'react'
import CompaniesCard from './CompaniesCard'

const CompaniesList = () => {
  return (
    <Stack spacing={2} direction='row'>
    <CompaniesCard />
    <CompaniesCard />
    <CompaniesCard />
    <CompaniesCard />
    </Stack>
  )
}

export default CompaniesList
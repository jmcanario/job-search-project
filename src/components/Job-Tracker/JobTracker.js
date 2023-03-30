import { Box } from '@mui/material'
import React from 'react'
import JobElements from './JobElements'

const dummyJobs = 
[
  {
    jobTitle: 'Digital Designer',
    company: 'Design it!'
  },
  {
    jobTitle: 'Frontend Dev',
    company: 'Build it!'
  },
  {
    jobTitle: 'UI Designer',
    company: 'Big project'
  }
]

const JobTracker = () => {
  return (
    <>
    {/* JobTracker */}
    <Box sx={{ width: '100%', height: 400 }}>
      {dummyJobs.map((job) => {
            return <JobElements company={job.company} jobTitle={job.jobTitle} />
          })} 
    </Box></>
  )
}

export default JobTracker
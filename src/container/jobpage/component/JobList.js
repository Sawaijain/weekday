// JobList.js
import React from 'react';
import Grid from '@mui/material/Grid';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  return (
    <Grid container spacing={2}>
      {jobs && jobs?.jdList?.map(job => (
        <Grid key={job.jdUid} item xs={12} sm={6} md={4}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;

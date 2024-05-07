// JobList.js for passsign all job to job card
import React from 'react';
import Grid from '@mui/material/Grid';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  return (
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2} justifyContent="center">
        {jobs && jobs?.map(job => (
          <Grid key={job.jdUid} item xs={12} sm={6} md={3} style={{ minWidth: '300px' }}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>

  );
};

export default JobList;

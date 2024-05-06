import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../../redux/actions/jobActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import Filter from './component/Filter';
import JobList from './component/JobList';

const MainPage = ({ jobs, fetchJobs }) => {
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    fetchJobs({ limit, offset: 0 });
  }, [fetchJobs, limit]);

  const fetchMoreJobs = () => {
    console.log("hit");
    const body = {
      limit:limit+10,
      offset: 0
    };
    setLimit(limit+10)
    fetchJobs(body);
  };
  const hasMoreJobs = jobs?.totalCount >= limit;

  const handleFilterChange = (filterValues) => {
    // Fetch filtered jobs based on filter values
    // You need to implement this function in your jobActions
    // Pass filterValues as a parameter to fetch filtered jobs
  };


  return (
    <div>
      <InfiniteScroll
        dataLength={jobs?.jdList?.length || 10}
        next={fetchMoreJobs}
        hasMore={hasMoreJobs} // Check if there are more jobs to fetch
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more jobs to load</p>}
        scrollThreshold={0.9}
      >
        <Filter onFilterChange={handleFilterChange}/>
        <JobList jobs={jobs} />
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps, { fetchJobs })(MainPage);

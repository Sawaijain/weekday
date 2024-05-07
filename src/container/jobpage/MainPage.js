import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../../redux/actions/jobActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import Filter from './component/Filter';
import JobList from './component/JobList';

const MainPage = ({ jobs, fetchJobs }) => {
  const [limit, setLimit] = useState(10);
  const [filterJobs,setFilterJobs] = useState()
  useEffect(() => {
    fetchJobs({ limit, offset: 0 });
  }, [fetchJobs, limit]);

  //  when scroll down then for fetch more job
  const fetchMoreJobs = () => {
    const body = {
      limit:limit+10,
      offset: 0
    };
    setLimit(limit+10)
    fetchJobs(body);
  };
  const hasMoreJobs = jobs?.totalCount >= limit;

  useEffect(() => {
    setFilterJobs(jobs?.jdList) // set jobs if update or when load first time
  }, [jobs])
  
// filter jobs according some parameter
  const handleFilterChange = (filterValues) => {
    console.log("filter",filterValues)
   
    // min experience filter
    let finalData = jobs?.jdList;
    if(filterValues?.minExperience){
      finalData = finalData.filter((item)=>{
       return item?.minExp >= filterValues.minExperience
      })
    }

    // work type filter 
    if(filterValues?.remote){
      finalData = finalData?.filter((item)=>{
       if(filterValues?.remote==="remote"){
        return item?.location=="remote"
       }else{
        return item?.location!=="remote"
       }
      })
    }

    // location filter 
    if(filterValues?.location){
      finalData = finalData?.filter((item)=>{
        return item?.location?.toLowerCase()?.includes(filterValues?.location?.toLowerCase());
      })
    }

    // company name filter 
    if(filterValues?.companyName){
      finalData = finalData?.filter((item)=>{
        return item?.companyName?.toLowerCase()?.includes(filterValues?.companyName?.toLowerCase())
      })
    }

    // role filter 
    if(filterValues?.role){
      finalData = finalData?.filter((item)=>{
        return item?.jobRole?.toLowerCase()?.includes(filterValues?.role?.toLowerCase())
      })
    }

    // min base pay filter 

    if(filterValues?.minBasePay){
      finalData = finalData.filter((item)=>{
       return item?.minJdSalary >= filterValues.minBasePay
      })
    }
    setFilterJobs(finalData)
    
  };

  // maxJdSalary  minJdSalary  salaryCurrencyCode  location minExp maxExp  jobRole companyName  logoUrl
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
          <div style={{padding:"40px"}}>
        <Filter onFilterChange={handleFilterChange}/> 
      
        <JobList jobs={filterJobs} />
        </div>
      </InfiniteScroll>
    </div>
  );
};

// getting jobs state from redux store
const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs
});

// redux store connect
export default connect(mapStateToProps, { fetchJobs })(MainPage);

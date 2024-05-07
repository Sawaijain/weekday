// action for job fetching
export const fetchJobsRequest = () => ({
    type: 'FETCH_JOBS_REQUEST'
  });
  
  export const fetchJobsSuccess = (jobs) => ({
    type: 'FETCH_JOBS_SUCCESS',
    payload: jobs
  });
  
  export const fetchJobsFailure = (error) => ({
    type: 'FETCH_JOBS_FAILURE',
    payload: error
  });
  
  export const fetchJobs = (body) => {
    return async (dispatch) => {
      dispatch(fetchJobsRequest());
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
     
     const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body:JSON.stringify(body) 
        };
  
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch(fetchJobsSuccess(data));
      } catch (error) {
        dispatch(fetchJobsFailure(error.message));
      }
    };
  };
  
// initial state 
const initialState = {
    jobs: [],
    loading: false,
    error: null
  };
  //  job reducer to maintain all job fetching things
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOBS_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_JOBS_SUCCESS':
        return {
          ...state,
          loading: false,
          jobs: action.payload,
          error: null
        };
      case 'FETCH_JOBS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  
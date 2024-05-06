// redux/reducers/jobReducer.js
const initialState = {
    jobs: [],
    loading: false,
    error: null
  };
  
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
  
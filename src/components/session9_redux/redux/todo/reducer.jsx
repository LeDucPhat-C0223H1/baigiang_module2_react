import { ADD_JOB, DELETE_JOB } from "./constants";

export const initialState = {
  listJobs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,
        listJobs: [...state.listJobs, action.payload]
      };
      
    case DELETE_JOB:
      const newJobs = [...state.listJobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        listJobs: newJobs,
      };
    default:
      return state;
  }
};
export default reducer;
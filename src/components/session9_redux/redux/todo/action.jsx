import { ADD_JOB, DELETE_JOB} from "./constants"

export const addJob = (payload) => ({
    type: ADD_JOB, 
    payload,
})
export const deleteJob = (payload) => ({
    type: DELETE_JOB,
    payload,
})
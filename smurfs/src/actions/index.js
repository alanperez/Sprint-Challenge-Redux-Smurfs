import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const ADDING_SMURF = "ADDING_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import { ADD_DATA } from '../types';

export const addData = (data) => (dispatch, getState) => {
  const getData = getState().getData.slice();
  getData.push({ ...data });
  dispatch({ type: ADD_DATA, payload: getData });
};

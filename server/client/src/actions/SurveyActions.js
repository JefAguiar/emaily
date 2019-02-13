import { SUBMIT_SURVEY, FETCH_USER, FETCH_SURVEYS } from './types';
import axios from 'axios';

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/survey', values);
  
  dispatch({ type: FETCH_USER, payload: res.data });
  
  history.push('/surveys');

  return {
    type: SUBMIT_SURVEY,
    payload: res.data
  };
};

export const fetchSurveys = () => async dispatch => {
  const surveys = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: surveys.data })
};
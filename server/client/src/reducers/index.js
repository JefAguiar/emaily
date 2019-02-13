import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SurveyReducer from './SurveyReducer';

import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  auth: AuthReducer,
  form: reduxForm,
  surveys: SurveyReducer
});
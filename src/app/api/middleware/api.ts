import axios from 'axios';
import { accessDenied, apiError, CALL_API } from '../store/actions';

const apiMiddleware = ({ dispatch }: any) => (next: any) => (action: any) => {
  next(action);

  if (action.type !== CALL_API) return;

  const {
    url,
    method,
    data,
    accessToken,
    afterSuccess,
    afterError,
    headers,
    beforeStart,
    startType,
    errorType,
    successType,
  } = action.payload;
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  // axios default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || '';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  if (beforeStart) {
    dispatch(beforeStart(data));
  }

  if (startType) {
    dispatch({ type: startType });
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({ data }) => {
      if (successType) {
        dispatch({ type: successType });
      }

      if (afterSuccess) {
        dispatch(afterSuccess(data));
      }
    })
    .catch(error => {
      dispatch(apiError(error));

      if (errorType) {
        dispatch({ type: errorType });
      }

      if (afterError) {
        dispatch(afterError(error));
      }

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    });
};

export default apiMiddleware;

import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

import { accessDenied, apiError, CALL_API } from '../store/actions';
import { showNotification } from '../../core/libs';

const apiMiddleware = ({ dispatch }: any) => (next: any) => async (action: any) => {
  next(action);

  if (action.type !== CALL_API) return;

  const {
    url,
    method,
    data,
    params,
    afterSuccess,
    afterError,
    headers,
    beforeStart,
    startType,
    errorType,
    successType,
  } = action.payload;

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || '';
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  const accessToken: string | null = localStorage.getItem('accessToken');

  if (accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

  if (beforeStart) {
    beforeStart(data);
  }

  if (startType) {
    dispatch({ type: startType });
  }

  await axios
    .request({
      url,
      method,
      headers,
      data: decamelizeKeys(data),
      params: decamelizeKeys(params),
    })
    .then(({ data }) => {
      let responseBody;

      if (data) {
        responseBody = camelizeKeys(data);
      }

      if (successType) {
        dispatch({ type: successType });
      }

      if (afterSuccess) {
        afterSuccess(responseBody);
      }
    })
    .catch(error => {
      dispatch(apiError(error));

      if (errorType) {
        dispatch({ type: errorType });
      }

      if (afterError) {
        afterError(error);
      }

      if (error.response && error.response.status === 500) {
        showNotification('Internal Server Error', 'Please try to refresh the page...', 'error');
      }

      if (error.response && error.response.status === 401) {
        showNotification('Access denied', '', 'error');
        dispatch(accessDenied(window.location.pathname));
      }
    });
};

export default apiMiddleware;

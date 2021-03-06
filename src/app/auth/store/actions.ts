import { CALL_API, CallApiDispatchType } from '../../api/store/actions';
import { User } from '../../core/models/User';
import { Action } from 'redux';

export const LOADING_USER = Symbol('LOADING_USER');
export const SET_USER = Symbol('SET_USER');
export const LOADING_USER_FAILURE = Symbol('LOADING_USER_FAILURE');
export const RESET_USER = Symbol('RESET_USER');

type SetUserActionType = {
  type: typeof SET_USER;
  payload: User;
};

export type SignInFormDataType = {
  email: string;
  password: string;
};

const setUser = (data: User): SetUserActionType => ({
  type: SET_USER,
  payload: data,
});

export const loadUserProfile = () => (dispatch: any): CallApiDispatchType =>
  dispatch({
    type: CALL_API,
    payload: {
      url: '/user_profile',
      method: 'GET',
      startType: LOADING_USER,
      errorType: LOADING_USER_FAILURE,
      afterSuccess: (data: User): CallApiDispatchType => dispatch(setUser(data)),
      afterError: () => {
        window.location.href = '/sign-in';
      },
    },
  });

export const signUp = (data: User, afterError: any, afterSuccess: any) => (
  dispatch: CallApiDispatchType,
): CallApiDispatchType => {
  return dispatch({
    type: CALL_API,
    payload: {
      url: '/register',
      method: 'POST',
      data,
      afterSuccess: (res: any): void => {
        afterSuccess();
        localStorage.setItem('token', res.accessToken);
        dispatch(setUser(data));
      },
      afterError,
    },
  });
};

export const signIn = (data: SignInFormDataType, afterError: any, afterSuccess: any) => (
  dispatch: CallApiDispatchType,
): CallApiDispatchType => {
  return dispatch({
    type: CALL_API,
    payload: {
      url: '/login',
      method: 'POST',
      data,
      afterSuccess: (res: any): void => {
        afterSuccess();
        localStorage.setItem('token', res.accessToken);
      },
      afterError,
    },
  });
};

export const resetUser = (): Action => ({ type: RESET_USER });

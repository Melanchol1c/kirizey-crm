import { CALL_API, CallApiDispatchType } from '../../api/store/actions';
import { User } from '../../core/models/User';

export const LOADING_USER = Symbol('LOADING_USER');
export const SET_USER = Symbol('SET_USER');
export const LOADING_USER_FAILURE = Symbol('LOADING_USER_FAILURE');

type SetUserActionType = {
  type: typeof SET_USER;
  payload: User;
};

export type SignInUpFormDataType = {
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
      afterSuccess: (res: User): void => {
        afterSuccess();
        dispatch(setUser(data));
      },
      afterError,
    },
  });
};

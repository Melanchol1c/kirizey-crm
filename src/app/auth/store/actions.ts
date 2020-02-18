import { USE_API } from '../../api/store/actions';
import { User } from '../../core/models/User';

export const LOADING_USER = Symbol('LOADING_USER');
export const LOADING_USER_SUCCESS = Symbol('LOADING_USER_SUCCESS');
export const LOADING_USER_FAILURE = Symbol('LOADING_USER_FAILURE');

type SetUserActionType = {
  type: typeof LOADING_USER_SUCCESS;
  payload: User;
};

const setUser = (data: User): SetUserActionType => ({
  type: LOADING_USER_SUCCESS,
  payload: data,
});

export const loadUserProfile = USE_API({
  url: '/user_profile',
  method: 'GET',
  startType: LOADING_USER,
  errorType: LOADING_USER_FAILURE,
  afterSuccess: setUser,
});
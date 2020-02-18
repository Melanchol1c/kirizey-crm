import { User } from '../../core/models/User';
import { LOADING_USER, LOADING_USER_SUCCESS, LOADING_USER_FAILURE } from './actions';

const initialState = {
  user: null as User | null,
  userLoading: false,
};

type InitialStateType = typeof initialState;

export default (state = initialState, { type, payload }: any): InitialStateType => {
  switch (type) {
    case LOADING_USER:
      return { ...state, userLoading: true, user: null };

    case LOADING_USER_SUCCESS:
      return { ...state, userLoading: false, user: payload };

    case LOADING_USER_FAILURE:
      return { ...state, userLoading: false, user: null };

    default:
      return state;
  }
};

import { User } from '../../core/models/User';
import { LOADING_USER, SET_USER, LOADING_USER_FAILURE, RESET_USER } from './actions';

const initialState = {
  user: null as User | null,
  userLoading: true,
};

type InitialStateType = typeof initialState;

export default (state = initialState, { type, payload }: any): InitialStateType => {
  switch (type) {
    case LOADING_USER:
      return { ...state, userLoading: true, user: null };

    case SET_USER:
      return { ...state, userLoading: false, user: payload };

    case LOADING_USER_FAILURE:
      return { ...state, userLoading: false, user: null };

    case RESET_USER:
      return { ...state, user: null };

    default:
      return state;
  }
};

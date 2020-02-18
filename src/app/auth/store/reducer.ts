import { User } from '../../core/models/User';
import { LOADING_USER, LOADING_USER_SUCCESS, LOADING_USER_FAILURE } from './actions';

const initialState = {
  user: null as User | null,
  loading: false,
};

type InitialStateType = typeof initialState;

export default (state = initialState, { type, payload }: any): InitialStateType => {
  switch (type) {
    case LOADING_USER:
      return { ...state, loading: true, user: null };

    case LOADING_USER_SUCCESS:
      return { ...state, loading: false, user: payload };

    case LOADING_USER_FAILURE:
      return { ...state, loading: false, user: null };

    default:
      return state;
  }
};

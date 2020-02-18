import { User } from '../../core/models/User';

export const userSelector = (state: any): User | null => state.auth.user;
export const userLoadingSelector = (state: any): User | null => state.auth.userLoading;

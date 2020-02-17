import createRouteConfig from '../core/libs/createRouteConfig';
import { SIGN_IN_PATH, SIGN_UP_PATH } from '../core/constants/routes';
import { AuthLayout } from '../layout';
import { SignUpPage, SignInPage } from './pages';

export default [
  createRouteConfig(SIGN_IN_PATH, SignInPage, AuthLayout),
  createRouteConfig(SIGN_UP_PATH, SignUpPage, AuthLayout),
];

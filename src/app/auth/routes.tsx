import { createRouteConfig } from '../core/libs';
import { SIGN_IN_PATH, SIGN_UP_PATH } from '../core/constants/routePaths';
import { AuthLayout } from '../layout';
import { SignUpPage, SignInPage } from './pages';

const signIn = createRouteConfig(SIGN_IN_PATH, SignInPage, AuthLayout);
const signUp = createRouteConfig(SIGN_UP_PATH, SignUpPage, AuthLayout);

export default [signIn, signUp];

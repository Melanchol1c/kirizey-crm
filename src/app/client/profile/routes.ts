import { PROFILE_PATH } from '../../core/constants/routePaths';
import { createRouteConfig } from '../../core/libs';
import ProfilePage from './pages/ProfilePage';
import { DashboardLayout } from '../../layout';

const profilePage = createRouteConfig(PROFILE_PATH, ProfilePage, DashboardLayout, true, true);

export default [profilePage];

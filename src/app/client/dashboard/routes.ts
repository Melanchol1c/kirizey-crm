import { createRouteConfig } from '../../core/libs';
import { DASHBOARD_PATH } from '../../core/constants/routePaths';
import { DashboardPage } from './pages';
import { DashboardLayout } from '../../layout';

const dashboard = createRouteConfig(DASHBOARD_PATH, DashboardPage, DashboardLayout, true, true);

export default [dashboard];

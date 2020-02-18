import { createRouteConfig } from '../../core/libs';
import { COMPANY_PAGE_PATH } from '../../core/constants/routePaths';
import { CompanyPage } from './pages';
import { DashboardLayout } from '../../layout';

const companyDetails = createRouteConfig(COMPANY_PAGE_PATH, CompanyPage, DashboardLayout, true, true);

export default [companyDetails];

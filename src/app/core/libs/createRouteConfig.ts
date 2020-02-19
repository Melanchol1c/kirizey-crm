import { RouteConfigType } from '../models/RouteConfigType';
import DefaultLayout from '../../layout/DefaultLayout';

const createRouteConfig = (
  path: string,
  component: any,
  layout: React.FC<any> = DefaultLayout,
  auth = false,
  exact = false,
): RouteConfigType => {
  return {
    path,
    component,
    exact,
    meta: {
      layout,
      auth,
    },
  };
};

export default createRouteConfig;

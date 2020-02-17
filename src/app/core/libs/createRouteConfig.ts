type RouteMetaType = {
  layout: React.FC<any> | null;
  auth: boolean;
};

type RouteConfigType = {
  path: string;
  component: React.FC<any>;
  meta: RouteMetaType;
};

const createRouteConfig = (
  path: string,
  component: React.FC<any>,
  layout: React.FC<any> | null = null,
  auth = false,
): RouteConfigType => {
  return {
    path,
    component,
    meta: {
      layout,
      auth,
    },
  };
};

export default createRouteConfig;

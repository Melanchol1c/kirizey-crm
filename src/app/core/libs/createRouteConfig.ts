type RouteMetaType = {
  layout: JSX.Element | null;
  auth: boolean;
};

type RouteConfigType = {
  path: string;
  component: JSX.Element;
  meta: RouteMetaType;
};

const createRouteConfig = (
  path: string,
  component: JSX.Element,
  layout: JSX.Element | null = null,
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

type RouteMetaType = {
  layout: React.FC<any> | null;
  auth: boolean;
};

export type RouteConfigType = {
  path: string;
  component: React.FC<any>;
  meta: RouteMetaType;
  exact: boolean;
};

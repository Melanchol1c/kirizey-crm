export const CALL_API = Symbol('CALL_API');
export const ACCESS_DENIED = Symbol('ACCESS_DENIED');
export const CALL_API_ERROR = Symbol('CALL_API_ERROR');

export type CALL_API_PAYLOAD_TYPE = {
  url: string;
  method: string;
  data?: object;
  params?: object;
  headersOverride?: any;
  afterSuccess?: any;
  afterError?: any;
  beforeStart?: any;
  startType?: symbol;
  errorType?: symbol;
  successType?: symbol;
};

export const accessDenied = (url: string): any => ({
  type: ACCESS_DENIED,
  payload: {
    url,
  },
});

export const apiError = (error: any): any => ({
  type: CALL_API_ERROR,
  error,
});

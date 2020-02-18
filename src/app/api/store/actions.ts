export const CALL_API = Symbol('CALL_API');
export const ACCESS_DENIED = Symbol('ACCESS_DENIED');
export const CALL_API_ERROR = Symbol('CALL_API_ERROR');

type CALL_API_TYPE = {
  url: string;
  method: string;
  data?: object;
  accessToken?: string;
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

export const USE_API = ({
  url = '',
  method = 'GET',
  data,
  accessToken,
  headersOverride,
  afterSuccess,
  afterError,
  beforeStart,
  startType,
  errorType,
  successType,
}: CALL_API_TYPE): any => ({
  type: CALL_API,
  payload: {
    url,
    method,
    data,
    accessToken,
    headersOverride,
    afterSuccess,
    afterError,
    beforeStart,
    startType,
    errorType,
    successType,
  },
});

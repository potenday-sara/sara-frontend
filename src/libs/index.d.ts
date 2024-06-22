export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type HTTPHeaders = any;
export type HTTPParams = unknown;

export type HTTPServerOptions = {
  cache?: 'force-cache' | 'no-store';
  next?: {
    revalidate: false | 0 | number;
    tage: string[];
  };
};

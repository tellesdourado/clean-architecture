export interface HttpResponse {
  headers?: object;
  statusCode: number;
  body?: any;
}

export interface HttpRequest<T> {
  body?: T | unknown;
  params?: unknown;
  header?: unknown;
}

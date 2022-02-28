export interface Service {
  run<T>(...args: unknown[]): Promise<T | unknown>;
}

import { HttpResponse } from "../../contracts/http";

export const response = {
  httpResponse: {} as HttpResponse,

  status(code: number) {
    this.httpResponse.statusCode = code;
    return this;
  },
  // headers(h: object) {
  //   this.httpResponse.headers = h;
  //   return this;
  // },
  body(b: unknown) {
    this.httpResponse.body = b;
    return this;
  },
  build() {
    return this.httpResponse;
  },
};

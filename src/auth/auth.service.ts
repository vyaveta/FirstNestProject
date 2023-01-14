import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signin() {
    return {
      status: true,
      msg: 'hello from AuthService',
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signup() {
    return {
      status: true,
      msg: 'Hello from AuthService',
    };
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return {
      status: true,
      msg: 'hello from AuthService',
    };
  }
  signup() {
    return {
      status: true,
      msg: 'Hello from AuthService',
    };
  }
}

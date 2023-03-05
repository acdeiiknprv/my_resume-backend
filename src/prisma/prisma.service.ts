 import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  constructor() {}

  get job() {
    return this.prisma.job;
  }

  private readonly prisma = new PrismaClient({
    // Optional Prisma Client configuration options
  });

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}

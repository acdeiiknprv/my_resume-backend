import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Job } from '.prisma/client';


@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number): Promise<Job> {
    return this.prisma.job.findUnique({ where: { id } });
  }
  
  async findAll(): Promise<Job[]> {
    return this.prisma.job.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }
  
  async create(job: Job): Promise<Job> {
    return this.prisma.job.create({ data: job });
  }
  
  async update(id: number, job: Job): Promise<Job> {
    return this.prisma.job.update({ where: { id }, data: job });
  }
  
  async remove(id: number): Promise<void> {
    await this.prisma.job.delete({ where: { id } });
  }
}

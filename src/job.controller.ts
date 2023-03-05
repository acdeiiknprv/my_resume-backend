import { Controller, Get, Param } from '@nestjs/common';
import { JobsService } from './job.service';
import { Job } from '.prisma/client';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Job> {
    const idNumber = parseInt(id);
    return this.jobsService.findOne(idNumber);
  }
}

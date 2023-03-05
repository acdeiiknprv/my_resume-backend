import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Job } from './job.entity';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Job> {
    return this.jobService.findOne(+id);
  }

  @Post()
  async create(@Body() job: Job): Promise<Job> {
    return this.jobService.create(job);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() job: Job): Promise<Job> {
    return this.jobService.update(+id, job);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.jobService.delete(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  async findOne(id: number): Promise<Job> {
    return this.jobRepository.findOne({ where: { id } });
  }

  async create(job: Job): Promise<Job> {
    return this.jobRepository.save(job);
  }

  async update(id: number, job: Job): Promise<Job> {
    await this.jobRepository.update(id, job);
    return this.jobRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.jobRepository.delete(id);
  }
}

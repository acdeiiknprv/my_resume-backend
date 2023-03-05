import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobTitle: string;

  @Column()
  jobDescription: string;

  @Column()
  jobCityLocation: string;

  @Column()
  jobCountryLocation: string;

  @Column()
  jobCompany: string;

  @Column()
  jobStartDate: string;

  @Column()
  jobEndDate: string;

  @Column()
  jobKeywords: string;
}

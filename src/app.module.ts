import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsController } from './job.controller';
import { JobsService } from './job.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, JobsController],
  providers: [AppService, JobsService, PrismaService],
})
export class AppModule {}

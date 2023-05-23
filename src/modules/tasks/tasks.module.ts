import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from 'src/controllers/tasks/tasks.controller';
import { TaskEntity } from 'src/entities/tasks.entity';
import { TasksRepository } from 'src/repositories/tasks.repository';
import { TasksService } from 'src/services/tasks/tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TasksService, TasksRepository, JwtService],
  controllers: [TasksController],
})
export class TasksModule {}

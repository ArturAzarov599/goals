import { DeleteResult } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { TasksRepository } from 'src/repositories/tasks.repository';

import { TaskDto } from 'src/dtos/tasks/task.dto';
import { CreateTaskDto } from 'src/dtos/tasks/create-task.dto';
import { DeleteTaskDto } from 'src/dtos/tasks/delete-task.dto';
import { ITasksService } from 'src/interfaces/services/tasks.service.interface';
import { EmailGoalIdDto } from 'src/dtos/common/email-goal-id.dto';

@Injectable()
export class TasksService implements ITasksService {
  constructor(private readonly taskRepository: TasksRepository) {}

  getTasks(email: string): Promise<TaskDto[]> {
    try {
      return this.taskRepository.getTasks(email);
    } catch (error) {
      throw error;
    }
  }

  create(dto: CreateTaskDto): Promise<TaskDto> {
    try {
      return this.taskRepository.create(dto);
    } catch (error) {
      throw error;
    }
  }

  delete(dto: DeleteTaskDto): Promise<DeleteResult> {
    try {
      return this.taskRepository.delete(dto);
    } catch (error) {
      throw error;
    }
  }

  update(dto: TaskDto, query: EmailGoalIdDto): Promise<TaskDto> {
    try {
      return this.taskRepository.update(dto, query);
    } catch (error) {
      throw error;
    }
  }

  getTask(dto: DeleteTaskDto): Promise<TaskDto> {
    try {
      return this.taskRepository.getTask(dto);
    } catch (error) {
      throw error;
    }
  }

  completeTask(dto: DeleteTaskDto): Promise<TaskDto> {
    try {
      return this.taskRepository.completeTask(dto);
    } catch (error) {
      throw error;
    }
  }
}

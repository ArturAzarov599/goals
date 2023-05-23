import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { TaskDto } from 'src/dtos/tasks/task.dto';
import { TaskEntity } from 'src/entities/tasks.entity';
import { UserEntity } from 'src/entities/user.entity';
import { CreateTaskDto } from 'src/dtos/tasks/create-task.dto';
import { DeleteTaskDto } from 'src/dtos/tasks/delete-task.dto';
import { ITaskRepository } from 'src/interfaces/repositories/tasks.repository.interface';
import { GoalEntity } from 'src/entities/goal.entity';
import { EmailGoalIdDto } from 'src/dtos/common/email-goal-id.dto';

@Injectable()
export class TasksRepository implements ITaskRepository {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  getTask(dto: DeleteTaskDto): Promise<TaskEntity> {
    try {
      return this.taskRepository.findOne({
        where: {
          user: { email: dto.email },
          goal: { id: dto.goalId },
          id: dto.id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  getTasks(email: string): Promise<TaskEntity[]> {
    try {
      return this.taskRepository.find({
        where: { user: { email: email } },
      });
    } catch (error) {
      throw error;
    }
  }

  create({ email, goalId, ...rest }: CreateTaskDto): Promise<TaskEntity> {
    try {
      return this.taskRepository.save({
        ...rest,
        user: email as unknown as UserEntity,
        goal: goalId as unknown as GoalEntity,
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(dto: DeleteTaskDto): Promise<DeleteResult> {
    try {
      const task = await this.getTask(dto);

      if (!task) throw new NotFoundException();

      return this.taskRepository.delete({ id: dto.id });
    } catch (error) {
      throw error;
    }
  }

  async update(dto: TaskDto, query: EmailGoalIdDto): Promise<TaskEntity> {
    try {
      const task = await this.getTask({ ...query, id: dto.id });

      if (!task) throw new NotFoundException();

      return this.taskRepository.save(dto);
    } catch (error) {
      throw error;
    }
  }

  async completeTask(dto: DeleteTaskDto): Promise<TaskEntity> {
    try {
      const task = await this.getTask(dto);

      if (!task) throw new NotFoundException();

      return this.taskRepository.save({ ...dto, is_completed: true });
    } catch (error) {
      throw error;
    }
  }
}

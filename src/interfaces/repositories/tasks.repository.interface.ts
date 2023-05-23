import { TaskEntity } from 'src/entities/tasks.entity';
import { TaskDto } from 'src/dtos/tasks/task.dto';
import { CreateTaskDto } from 'src/dtos/tasks/create-task.dto';
import { DeleteTaskDto } from 'src/dtos/tasks/delete-task.dto';
import { DeleteResult } from 'typeorm';
import { EmailGoalIdDto } from 'src/dtos/common/email-goal-id.dto';

export interface ITaskRepository {
  getTasks(email: string): Promise<TaskEntity[]>;
  create(dto: CreateTaskDto): Promise<TaskEntity>;
  delete(dto: DeleteTaskDto): Promise<DeleteResult>;
  update(dto: TaskDto, query: EmailGoalIdDto): Promise<TaskEntity>;
  getTask(dto: DeleteTaskDto): Promise<TaskEntity>;
  completeTask(dto: DeleteTaskDto): Promise<TaskEntity>;
}

import { DeleteResult } from 'typeorm';

import { TaskDto } from 'src/dtos/tasks/task.dto';
import { DeleteTaskDto } from 'src/dtos/tasks/delete-task.dto';
import { CreateTaskDto } from 'src/dtos/tasks/create-task.dto';
import { EmailGoalIdDto } from 'src/dtos/common/email-goal-id.dto';

export interface ITasksService {
  getTasks(email: string): Promise<TaskDto[]>;
  create(dto: CreateTaskDto): Promise<TaskDto>;
  delete(dto: DeleteTaskDto): Promise<DeleteResult>;
  update(dto: TaskDto, query: EmailGoalIdDto): Promise<TaskDto>;
  getTask(dto: DeleteTaskDto): Promise<TaskDto>;
  completeTask(dto: DeleteTaskDto): Promise<TaskDto>;
}

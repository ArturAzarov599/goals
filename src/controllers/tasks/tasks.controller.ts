import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';

import { TasksService } from 'src/services/tasks/tasks.service';

import { TaskDto } from 'src/dtos/tasks/task.dto';
import { CreateTaskDto } from 'src/dtos/tasks/create-task.dto';
import { DeleteTaskDto } from 'src/dtos/tasks/delete-task.dto';
import { EmailDto } from 'src/dtos/common/email.dto';
import { EmailGoalIdDto } from 'src/dtos/common/email-goal-id.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('single-task')
  getTask(@Query() query: DeleteTaskDto): Promise<TaskDto> {
    try {
      return this.tasksService.getTask(query);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  getTasks(@Query() { email }: EmailDto): Promise<TaskDto[]> {
    try {
      return this.tasksService.getTasks(email);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  create(@Body() dto: CreateTaskDto): Promise<TaskDto> {
    try {
      return this.tasksService.create(dto);
    } catch (error) {
      throw error;
    }
  }

  @Delete()
  delete(@Body() dto: DeleteTaskDto): Promise<DeleteResult> {
    try {
      return this.tasksService.delete(dto);
    } catch (error) {
      throw error;
    }
  }

  @Put('complete')
  complete(@Body() dto: DeleteTaskDto): Promise<TaskDto> {
    try {
      return this.tasksService.completeTask(dto);
    } catch (error) {
      throw error;
    }
  }

  @Put()
  update(
    @Body() dto: TaskDto,
    @Query() query: EmailGoalIdDto,
  ): Promise<TaskDto> {
    try {
      return this.tasksService.update(dto, query);
    } catch (error) {
      throw error;
    }
  }
}

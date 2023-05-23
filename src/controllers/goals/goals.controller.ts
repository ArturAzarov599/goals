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
import { EmailGoalIdDto } from 'src/dtos/common/email-goal-id.dto';
import { EmailDto } from 'src/dtos/common/email.dto';
import { CreateGoalDto } from 'src/dtos/goal/create-goal.dto';
import { GoalDto } from 'src/dtos/goal/goal.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { GoalsService } from 'src/services/goals/goals.service';

@Controller('goals')
@UseGuards(AuthGuard)
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Get()
  getUserGoals(@Query() { email }: EmailDto): Promise<GoalDto[]> {
    try {
      return this.goalsService.getUserGoals(email);
    } catch (error) {
      throw error;
    }
  }

  @Get('single-goal')
  getUserGoal(@Query() { email, goalId }: EmailGoalIdDto): Promise<GoalDto> {
    try {
      return this.goalsService.getUserGoal(email, goalId);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  createGoal(@Body() dto: CreateGoalDto): Promise<GoalDto> {
    try {
      return this.goalsService.createGoal(dto);
    } catch (error) {
      throw error;
    }
  }

  @Put()
  updateGoal(
    @Body() dto: GoalDto,
    @Query() { email }: EmailDto,
  ): Promise<GoalDto> {
    try {
      return this.goalsService.updateGoal(dto, email);
    } catch (error) {
      throw error;
    }
  }

  @Delete()
  deleteGoal(@Body() { email, goalId }: EmailGoalIdDto): Promise<GoalDto> {
    try {
      return this.goalsService.deleteGoal(email, goalId);
    } catch (error) {
      throw error;
    }
  }
}

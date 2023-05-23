import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from 'src/dtos/goal/create-goal.dto';
import { GoalDto } from 'src/dtos/goal/goal.dto';
import { IGoalService } from 'src/interfaces/services/goal.service.interface';
import { GoalsRepository } from 'src/repositories/goals.repository';

@Injectable()
export class GoalsService implements IGoalService {
  constructor(private readonly goalsRepository: GoalsRepository) {}

  getUserGoals(email: string): Promise<GoalDto[]> {
    try {
      return this.goalsRepository.getUserGoals(email);
    } catch (error) {
      throw error;
    }
  }

  getUserGoal(email: string, goalId: number): Promise<GoalDto> {
    try {
      return this.goalsRepository.getUserGoal(email, goalId);
    } catch (error) {
      throw error;
    }
  }

  createGoal(dto: CreateGoalDto): Promise<GoalDto> {
    try {
      return this.goalsRepository.createGoal(dto);
    } catch (error) {
      throw error;
    }
  }

  updateGoal(dto: GoalDto, email: string): Promise<GoalDto> {
    try {
      return this.goalsRepository.updateGoal(dto, email);
    } catch (error) {
      throw error;
    }
  }

  deleteGoal(email: string, goalId: number): Promise<GoalDto> {
    try {
      return this.goalsRepository.deleteGoal(email, goalId);
    } catch (error) {
      throw error;
    }
  }
}

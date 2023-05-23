import { GoalDto } from 'src/dtos/goal/goal.dto';
import { CreateGoalDto } from 'src/dtos/goal/create-goal.dto';

export interface IGoalService {
  getUserGoals(email: string): Promise<GoalDto[]>;
  getUserGoal(email: string, goalId: number): Promise<GoalDto>;
  createGoal(dto: CreateGoalDto): Promise<GoalDto>;
  updateGoal(dto: GoalDto, email: string): Promise<GoalDto>;
  deleteGoal(email: string, goalId: number): Promise<GoalDto>;
}

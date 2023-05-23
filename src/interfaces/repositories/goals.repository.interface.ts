import { CreateGoalDto } from 'src/dtos/goal/create-goal.dto';
import { GoalDto } from 'src/dtos/goal/goal.dto';
import { GoalEntity } from 'src/entities/goal.entity';

export interface IGoalsRepository {
  getUserGoals(email: string): Promise<GoalEntity[]>;
  getUserGoal(email: string, goalId: number): Promise<GoalEntity>;
  createGoal(dto: CreateGoalDto): Promise<GoalEntity>;
  updateGoal(dto: GoalDto, email: string): Promise<GoalEntity>;
  deleteGoal(email: string, goalId: number): Promise<GoalEntity>;
}

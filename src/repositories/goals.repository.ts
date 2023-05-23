import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GoalEntity } from 'src/entities/goal.entity';
import { GoalDto } from 'src/dtos/goal/goal.dto';
import { CreateGoalDto } from 'src/dtos/goal/create-goal.dto';
import { IGoalsRepository } from 'src/interfaces/repositories/goals.repository.interface';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class GoalsRepository implements IGoalsRepository {
  constructor(
    @InjectRepository(GoalEntity)
    private readonly goalsRepository: Repository<GoalEntity>,
  ) {}

  getUserGoal(email: string, goalId: number): Promise<GoalEntity> {
    try {
      return this.goalsRepository.findOne({
        where: { user: { email }, id: goalId },
        relations: ['tasks'],
      });
    } catch (error) {
      throw error;
    }
  }

  getUserGoals(email: string): Promise<GoalEntity[]> {
    try {
      return this.goalsRepository.find({ where: { user: { email } } });
    } catch (error) {
      throw error;
    }
  }

  createGoal({ email, ...rest }: CreateGoalDto): Promise<GoalEntity> {
    try {
      return this.goalsRepository.save({
        ...rest,
        user: email as unknown as UserEntity,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateGoal(dto: GoalDto, email: string): Promise<GoalEntity> {
    try {
      const goal = await this.getUserGoal(email, dto.id);

      if (!goal) throw new BadRequestException('Can`t update unexcited goal');

      return this.goalsRepository.save(dto);
    } catch (error) {
      throw error;
    }
  }

  async deleteGoal(email: string, goalId: number): Promise<GoalEntity> {
    try {
      const goal = await this.getUserGoal(email, goalId);

      if (!goal) throw new BadRequestException('Goal in not existed');

      return this.goalsRepository.remove(goal);
    } catch (error) {
      throw error;
    }
  }
}

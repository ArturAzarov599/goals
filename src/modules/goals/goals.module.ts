import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalsController } from 'src/controllers/goals/goals.controller';
import { GoalEntity } from 'src/entities/goal.entity';
import { UserEntity } from 'src/entities/user.entity';
import { GoalsRepository } from 'src/repositories/goals.repository';
import { GoalsService } from 'src/services/goals/goals.service';

@Module({
  imports: [TypeOrmModule.forFeature([GoalEntity, UserEntity])],
  providers: [GoalsService, GoalsRepository, JwtService],
  controllers: [GoalsController],
})
export class GoalsModule {}

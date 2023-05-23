import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { TaskEntity } from './tasks.entity';

@Entity('goals')
export class GoalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'date', default: new Date().toISOString() })
  start_date: string;

  @Column({ type: 'date' })
  end_date: string;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.goals, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  user: UserEntity;

  @Column({ type: 'date', default: new Date().toISOString() })
  create_date: string;

  @OneToMany(() => TaskEntity, (taskEntity) => taskEntity.goal)
  tasks: TaskEntity[];
}

import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { AuthEntity } from './auth.entity';
import { GoalEntity } from './goal.entity';
import { TaskEntity } from './tasks.entity';

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

  @Column({ type: 'bigint' })
  phone: number;

  @Column()
  country: string;

  @Column()
  birth_day: string;

  @Column({ type: 'date', default: new Date().toISOString() })
  create_date: string;

  @OneToOne(() => AuthEntity, { onDelete: 'CASCADE' })
  @JoinColumn()
  credentials_id: AuthEntity;

  @OneToMany(() => GoalEntity, (goalEntity) => goalEntity.user)
  goals: GoalEntity[];

  @OneToMany(() => TaskEntity, (taskEntity) => taskEntity.user)
  tasks: TaskEntity[];
}

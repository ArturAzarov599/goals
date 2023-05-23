import { EPriority } from 'src/enums/priority.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GoalEntity } from './goal.entity';
import { UserEntity } from './user.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  note: string;

  @Column({ type: 'date', default: new Date().toISOString() })
  start_date: string;

  @Column({ type: 'date' })
  end_date: string;

  @Column({ default: false })
  is_completed: boolean;

  @Column({ enum: EPriority })
  priority: EPriority;

  @Column({
    type: 'date',
    default: new Date().toISOString(),
  })
  create_date: string;

  @ManyToOne(() => GoalEntity, (goalEntity) => goalEntity.tasks, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  goal: GoalEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.tasks, {
    nullable: false,
  })
  user: UserEntity;
}

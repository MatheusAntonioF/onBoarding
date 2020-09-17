import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import User from './User';
import Tech from './Tech';

@Entity('profiles')
class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'year_experience' })
  yearExperience: number;

  @Column()
  user_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Tech, tech => tech)
  techs: Tech[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Profile;

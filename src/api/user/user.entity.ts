import { Column, Entity, OneToMany } from 'typeorm';
import { CommonEntity } from '@app/utils/entity';
import { Post } from '@app/api/post/post.entity';

@Entity('user')
export class User extends CommonEntity {
  @Column()
  public name: string;

  @Column({ type: 'text', unique: true })
  public email: string;

  @Column({ type: 'text', nullable: true, array: true })
  public permissions?: string[];

  @Column('text')
  public password: string;

  @OneToMany(type => Post, post => post.user)
  public posts: Post[];
}

import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToMany } from "typeorm";
import { Post } from "../post/post.entity";
import CommonEntity from "../common/entity";

@Entity('user')
export class User extends CommonEntity {

  @Column('text')
  name: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', array: true, nullable: true })
  permissions?: string[]

  @Column('text')
  password: string;

  @OneToMany(type => Post, post => post.user)
  posts: Post[];
}

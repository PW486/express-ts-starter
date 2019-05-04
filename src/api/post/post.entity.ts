import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";
import CommonEntity from "../common/entity";

@Entity('post')
export class Post extends CommonEntity {

  @UpdateDateColumn({ type: "timestamptz" })
  updatedAt: Date;

  @Column()
  title: string;

  @Column('text')
  text: string;

  @Column({ nullable: true })
  photo?: string;

  @ManyToOne(type => User, user => user.posts, { nullable: false })
  user: User;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Category } from "../category/category.entity";

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column("text")
  text: string;

  @Column({
    nullable: true
  })
  photo?: string;

  @ManyToMany(type => Category, {
    cascade: true
  })
  @JoinTable()
  categories?: Category[];

}

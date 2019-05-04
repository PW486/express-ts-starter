import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column("text")
  password: string;
}

import { PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

export default abstract class CommonEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;
}

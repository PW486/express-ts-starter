import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export default abstract class CommonEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn({ type: 'timestamptz' })
  public createdAt: Date;
}

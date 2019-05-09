import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class CommonEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn({ type: 'timestamptz' })
  public createdAt: Date;
}

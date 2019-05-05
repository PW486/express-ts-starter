import { Column, Entity, ManyToOne, UpdateDateColumn } from 'typeorm';
import CommonEntity from '../common/entity';
import { User } from '../user/user.entity';

@Entity('post')
export class Post extends CommonEntity {
  @UpdateDateColumn({ type: 'timestamptz' })
  public updatedAt: Date;

  @Column()
  public title: string;

  @Column('text')
  public text: string;

  @Column({ nullable: true })
  public photo?: string;

  @ManyToOne(type => User, user => user.posts, { nullable: false })
  public user: User;
}

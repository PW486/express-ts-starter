import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from '@app/utils/entity';
import { User } from '@app/api/user/user.entity';

@Entity('post')
export class Post extends CommonEntity {
  @Column()
  public title: string;

  @Column('text')
  public text: string;

  @Column({ nullable: true })
  public photo?: string;

  @ManyToOne(type => User, user => user.posts, { nullable: false })
  public user: User;
}

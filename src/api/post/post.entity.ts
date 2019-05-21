import { User } from 'api/user/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from 'utils/entity';

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

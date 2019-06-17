import { Account } from 'api/account/account.entity';
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

  @ManyToOne(type => Account, account => account.posts, { nullable: false })
  public account: Account;
}

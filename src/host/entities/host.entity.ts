import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';

@Entity()
export class Host {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Index({unique: true})
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
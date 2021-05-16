import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Host {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Host {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Game {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    hostEmail: string;

    
}

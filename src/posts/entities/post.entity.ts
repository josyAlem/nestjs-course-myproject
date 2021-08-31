import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
   @ObjectIdColumn()
    id:ObjectID;
    @Column({length:150})
    title: string;
    @Column('text')
    content:string;
    @Column()
    imagePath:string;
}

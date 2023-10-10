import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BeforeInsert,
    BeforeUpdate,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { Length, IsEmail } from 'class-validator';
import bcrypt from 'bcryptjs';

@Entity()
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    @Length(3, 50)
    name: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    password: string;

    @Column()
    @Length(11, 14)
    document: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    @BeforeInsert()
    async generatePassword(): Promise<void> {
        try {
            if (this.password) {
                this.password = await bcrypt.hash(this.password, 10);
                this.created_at = new Date();
            }
        } catch (e) {
            console.log(e);
        }
    }

    @BeforeUpdate()
    async updateDate(): Promise<void> {
        this.update_at = new Date();
    }
}

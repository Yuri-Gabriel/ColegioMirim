/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    dispositivo: number;

    @Column()
    turma: number;

    @Column()
    status: number;

    @Column()
    defeito: string;

    @Column()
    data: string;
}
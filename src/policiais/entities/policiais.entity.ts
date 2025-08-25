import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('policiais')
export class Policiais {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rg_civil: string;

  @Column()
  rg_militar: string;

  @Column()
  cpf: string;

  @Column()
  data_nascimento: Date;

  @Column()
  matricula: string;
}

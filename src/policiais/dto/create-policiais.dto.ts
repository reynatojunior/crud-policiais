import { IsDate, IsInt, IsString } from "class-validator";

export class CreatePoliciaiDto {

    //fazendo a validacao
    
    @IsInt()
    id: number;

    @IsString()
    rg_civil: string;

    @IsString()
    rg_militar: string;

    @IsString()
    cpf: string;

    @IsDate()
    data_nascimento: Date;

    @IsString()
    matricula: string;
}

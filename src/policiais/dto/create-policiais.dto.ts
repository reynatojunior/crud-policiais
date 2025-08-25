import { IsDate, IsInt, IsString } from "class-validator";

export class CreatePoliciaiDto {

    //fazendo a validacao
    @IsString()
    rg_civil: string;

    @IsString()
    rg_militar: string;

    @IsString()
    cpf: string;

    @IsString()
    data_nascimento: string;

    @IsString()
    matricula: string;
}

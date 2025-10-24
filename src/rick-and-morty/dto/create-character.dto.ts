import { IsOptional, IsString } from "class-validator";


export class CreateCharacterDto {

    @IsString()
    name: string;

    @IsString()
    status: string;

    @IsString()
    species: string;

    @IsString()
    @IsOptional()
    gender: string;

}
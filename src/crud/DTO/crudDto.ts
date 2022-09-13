import {IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class crudDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsNumberString()
    phone: number;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsString()
    address: string;
  }
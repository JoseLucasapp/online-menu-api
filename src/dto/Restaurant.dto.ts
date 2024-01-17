import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class RestaurantDTO {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    logo: string;

    @IsNumber()
    address_id: number;
}
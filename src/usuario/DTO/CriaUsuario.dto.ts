import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CriaUsuarioDTO {
  
  @IsNotEmpty({message:'O nome do usuário deve ser uma String'})
  nome: string;

  @IsEmail({} ,{message: "Você deve enviar um email"} )
  email: string;

  @MinLength(8,{message:'A senha precisar ter pelo menos 8 char'})
  senha: string;
}
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO {
  
  @IsNotEmpty({message:'O nome do usuário deve ser uma String'})
  nome: string;

  @IsEmail({} ,{message: "Você deve enviar um email"} )
  @EmailEhUnico({message: "Ja existe um usuário com esse email"})
  email: string;

  @MinLength(8,{message:'A senha precisar ter pelo menos 8 char'})
  senha: string;
}
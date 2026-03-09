import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async:true})
export class EmailEhUnicoValidador  implements ValidatorConstraintInterface{

  constructor(private usuarioRepository:UsuarioRepository){    
  }
  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const usuarioComEmailExiste = await this.usuarioRepository.existeComEmail(value);
    return !usuarioComEmailExiste;
  }
  
}
export const  EmailEhUnico = (opcoesValidacao:ValidationOptions) => {
  return (objeto: Object,propriedade: string)=>{
    registerDecorator({
      target: objeto.constructor,
      propertyName:propriedade,
      options: opcoesValidacao,
      constraints:[],
      validator: EmailEhUnicoValidador
    });
  }
}
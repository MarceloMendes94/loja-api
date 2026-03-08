import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository{
    
    private usuarios:any[] = [];// esta errado pois  não devemos usar any em TS

    async salvar(usuario){
        this.usuarios.push(usuario);
        console.log(this.usuarios);
    }
    async listar(){
        return this.usuarios;
    }
    async existeComEmail(email:string){
        const possivelUsusario = this.usuarios.find(
            usuario=> usuario.email === email
        )
        return possivelUsusario!== undefined;
    }
}
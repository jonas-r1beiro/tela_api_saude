import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<Usuario | null>(null);

  usuario!: Usuario;

  constructor(
    private tokenService: TokenService
  ) {
    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }
   }

   private decodificarJWT(){
    const token = this.tokenService.retornarToken();
    if(token){
      this.usuario = jwtDecode(token) as Usuario;

      console.log(this.usuario);
    }
   }

   retornarUser(){
    this.userSubject.asObservable();
   }

   salvarToken(token: string){
    this.tokenService.salvarToken(token);

    this.decodificarJWT();
   }

   logout(){
    this.tokenService.excluirToken();

    this.userSubject.next(null);
   }

   estaLogado(){
    return this.tokenService.possuiToken();
   }

   getUsuario(){
    return this.usuario;
   }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { TokenService } from './token.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<Usuario | null>(null);

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
      const user = jwtDecode(token) as Usuario;
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
}

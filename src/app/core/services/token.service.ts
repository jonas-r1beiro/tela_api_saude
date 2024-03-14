import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TokenService {

  private readonly KEY = 'token';

  salvarToken(token: string){
    return localStorage.setItem(this.KEY, token);
  }

  excluirToken(){
    localStorage.removeItem(this.KEY);
  }

  retornarToken(){
    return localStorage.getItem(this.KEY);
  }

  possuiToken(){
    return !!this.retornarToken();
  }
}

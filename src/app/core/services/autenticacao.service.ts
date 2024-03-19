import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { tap } from 'rxjs';

interface AuthResponse{
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  dadosAutenticacao = {
    login: '',
    senha: ''
  }

  private API: string = 'http://localhost:8080/login';

  constructor(
    private http: HttpClient,
    private service: UserService
  ) { }

  autenticar(usuario: string, senha: string){
    this.dadosAutenticacao.login = usuario;
    this.dadosAutenticacao.senha = senha;

    if(this.service.estaLogado()){
      this.service.logout();
    }

    return this.http.post<AuthResponse>(
      `${this.API}`,
      this.dadosAutenticacao,
      {observe: 'response'}
    ).pipe(
      tap((response) =>{
        const authToken = response.body?.token || '';
        this.service.salvarToken(authToken);
      })
    )
  }
}

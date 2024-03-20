import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, UsuarioCadastro } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = "http://localhost:8080/usuarios";

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API);
  }

  excluir(id: number): Observable<any>{
    const url = `${this.API}/${id}`;
    return this.http.delete<any>(url);
  }

  criar(usuario: UsuarioCadastro): Observable<UsuarioCadastro>{
    return this.http.post<UsuarioCadastro>(this.API, usuario);
  }

  buscarPorId(id: number): Observable<Usuario>{
    const url = `${this.API}/${id}`;
    return this.http.get<Usuario>(url);
  }

  editar(usuario: Usuario): Observable<Usuario>{
    const url = `${this.API}`;
    return this.http.put<Usuario>(url, usuario);
  }

}

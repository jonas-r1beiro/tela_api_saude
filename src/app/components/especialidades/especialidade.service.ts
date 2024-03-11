import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidade } from './especialidade';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  private readonly API = "http://localhost:8080/especialidades"

  constructor(private http: HttpClient) { }

  listar(): Observable<Especialidade[]>{
    return this.http.get<Especialidade[]>(this.API);
  }

  excluir(id: number): Observable<any>{
    const url = `${this.API}/${id}`;
    return this.http.delete<any>(url);
  }

  criar(especialidade: Especialidade): Observable<Especialidade>{
    return this.http.post<Especialidade>(this.API, especialidade);
  }

  buscarPorId(id: number): Observable<Especialidade>{
    const url = `${this.API}/${id}`;
    return this.http.get<Especialidade>(url);
  }

  editar(especialidade: Especialidade): Observable<Especialidade>{
    const url = `${this.API}`;
    return this.http.put<Especialidade>(url, especialidade);
  }

}

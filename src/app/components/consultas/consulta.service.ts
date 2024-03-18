import { Cons, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consulta, ConsultaCadastro } from './consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private readonly API = "http://localhost:8080/consultas"

  constructor(private http: HttpClient) { }

  listar(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(this.API);
  }

  excluir(id: number): Observable<any>{
    const url = `${this.API}/${id}`;
    return this.http.delete<any>(url);
  }

  criar(medico: ConsultaCadastro): Observable<Consulta>{
    return this.http.post<Consulta>(this.API, medico);
  }

  buscarPorId(id: number): Observable<Consulta>{
    const url = `${this.API}/${id}`;
    return this.http.get<Consulta>(url);
  }

  editar(consulta: ConsultaCadastro): Observable<Consulta>{
    const url = `${this.API}`;
    return this.http.put<Consulta>(url, consulta);
  }

  buscarPorCpf(cpf: string): Observable<Consulta[]>{
    const url = `${this.API}/pesquisa_cpf/${cpf}`;
    return this.http.get<Consulta[]>(url);
  }

  buscarPorIdPaciente(id: number): Observable<Consulta[]>{
    const url = `${this.API}/pesquisa_id_paciente/${id}`;
    return this.http.get<Consulta[]>(url);
  }
  
}

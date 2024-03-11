import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Medico, MedicoCadastro } from './medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly API = "http://localhost:8080/medicos"

  constructor(private http: HttpClient) { }

  listar(): Observable<Medico[]>{
    return this.http.get<Medico[]>(this.API);
  }

  excluir(id: number): Observable<any>{
    const url = `${this.API}/${id}`;
    return this.http.delete<any>(url);
  }

  criar(medico: MedicoCadastro): Observable<Medico>{
    return this.http.post<Medico>(this.API, medico);
  }

  buscarPorId(id: number): Observable<Medico>{
    const url = `${this.API}/${id}`;
    return this.http.get<Medico>(url);
  }

  editar(medico: MedicoCadastro): Observable<Medico>{
    const url = `${this.API}`;
    return this.http.put<Medico>(url, medico);
  }

}

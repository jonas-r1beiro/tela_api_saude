import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly API = "http://localhost:8080/pacientes"

  constructor(private http: HttpClient) { }

  listar(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.API);
  }

  excluir(id: number): Observable<any>{
    const url = `${this.API}/${id}`;
    return this.http.delete<any>(url);
  }

  criar(medico: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(this.API, medico);
  }

  buscarPorId(id: number): Observable<Paciente>{
    const url = `${this.API}/${id}`;
    return this.http.get<Paciente>(url);
  }

  editar(paciente: Paciente): Observable<Paciente>{
    const url = `${this.API}`;
    return this.http.put<Paciente>(url, paciente);
  }
}

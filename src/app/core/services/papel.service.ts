import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Papel } from '../interfaces/papel';

@Injectable({
  providedIn: 'root'
})
export class PapelService {

  private readonly API = "http://localhost:8080/papeis"

  constructor(private http: HttpClient) { }

  listar(): Observable<Papel[]>{
    return this.http.get<Papel[]>(this.API);
  }

}

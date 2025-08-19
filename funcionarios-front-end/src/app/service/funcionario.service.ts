import { Funcionario, FuncionarioResponse } from './../model/Funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http:HttpClient) { }

 private apiUrl:string = "http://localhost:8080/funcionario"

  salvarFuncionario(funcionario: Funcionario): Observable<Funcionario>{
   return this.http.post<Funcionario>(`${this.apiUrl}/salvar`, funcionario );
  }

  listarFuncionario(): Observable<FuncionarioResponse>{
    return this.http.get<FuncionarioResponse>(this.apiUrl)
  }
}

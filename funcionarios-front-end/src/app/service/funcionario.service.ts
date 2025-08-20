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

 public salvarFuncionario(funcionario: Funcionario): Observable<Funcionario>{
   return this.http.post<Funcionario>(`${this.apiUrl}/salvar`, funcionario );
  }

 public listarFuncionario(): Observable<FuncionarioResponse>{
    return this.http.get<FuncionarioResponse>(this.apiUrl)
  }

  public buscarPorId(id:number): Observable<Funcionario>{
    return this.http.get<Funcionario>(`${this.apiUrl}/${id}`)
  }

 public excluirFuncionario(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

public editarFuncionario(id:Number ,funcionario:Funcionario): Observable<Funcionario>{
  return this.http.put<Funcionario>(`${this.apiUrl}/${id}`, funcionario)
}

  
}

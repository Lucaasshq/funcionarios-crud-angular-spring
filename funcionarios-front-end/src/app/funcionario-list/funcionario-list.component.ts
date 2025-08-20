
import { Funcionario, FuncionarioResponse } from '../model/Funcionario';
import { FuncionarioService } from './../service/funcionario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";


@Component({
  selector: 'app-funcionario-list',
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
editarFuncionario(arg0: any) {
throw new Error('Method not implemented.');
}

  displayedColumns: string[] = ['id', 'nome', 'contato', 'endereco', 'genero', 'departamento', 'skills', 'editar', 'excluir'];
  dados = new MatTableDataSource<Funcionario>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private funcionarioService: FuncionarioService) {
    this.listarFuncionarios();
  }

  ngOnInit(): void {
    this.listarFuncionarios();
  }

  ngAfterViewInit() {
    this.dados.paginator = this.paginator; // conecta o paginator
  }


  funcionarios: Funcionario[] = [];

  public listarFuncionarios(): void {
    this.funcionarioService.listarFuncionario().subscribe(
      {
        next: (res: FuncionarioResponse) => {
          this.dados.data = res.content
          this.dados.paginator = this.paginator;
        },
        error: (err: HttpErrorResponse) => {
          console.error("Erro ao lista funcionarios", err)
        }
      }
    )
  }

  public excluirFuncionario(id: string): void {
    this.funcionarioService.excluirFuncionario(id).subscribe(
      {
        next: (res) => {
          console.log(res)
          this.listarFuncionarios()
        },
        error: (err: HttpErrorResponse) => {
          console.error("Erro ao excluir usuario", err)
        }
      }
    )
  }


}

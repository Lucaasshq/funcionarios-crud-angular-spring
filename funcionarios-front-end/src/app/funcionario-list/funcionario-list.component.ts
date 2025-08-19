
import { Funcionario, FuncionarioResponse } from '../model/Funcionario';
import { FuncionarioService } from './../service/funcionario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-funcionario-list',
  imports: [MatTableModule, MatPaginator, MatPaginatorModule, CommonModule],
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'contato', 'endereco', 'genero', 'departamento', 'skills'];
  dados = new MatTableDataSource<Funcionario>([]);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private funcionarioService: FuncionarioService) {

  }

  ngOnInit(): void {
    this.listarFuncionarios();
  }

  ngAfterViewInit() {
    this.dados.paginator = this.paginator; // conecta o paginator
  }


  funcionarios: Funcionario[] = [];

  listarFuncionarios(): void {
    this.funcionarioService.listarFuncionario().subscribe(
      {
        next: (res: FuncionarioResponse) => {
          console.log(res.content);
          this.dados.data = res.content
        },
        error: (err: HttpErrorResponse) => {
          console.log("Erro ao lista funcionarios", err)
        }
      }
    )
  }

}

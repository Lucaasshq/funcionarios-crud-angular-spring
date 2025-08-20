import { Funcionario } from './../model/Funcionario';
import { FuncionarioResponse } from '../model/Funcionario';
import { FuncionarioService } from './../service/funcionario.service';
import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogEditComponent } from "../dialog-edit/dialog-edit.component";


@Component({
  selector: 'app-funcionario-list',
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatIconModule, MatButtonModule, MatDialogModule, DialogEditComponent],
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FuncionarioListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'contato', 'endereco', 'genero', 'departamento', 'skills', 'editar', 'excluir'];
  dados = new MatTableDataSource<Funcionario>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private funcionarioService: FuncionarioService, private router: Router) {
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

  public buscarFuncionarioPorId(id: number) {
    this.funcionarioService.buscarPorId(id).subscribe(
      {
        next: (res) => {
          console.log(res)
        },
        error: (err: HttpErrorResponse) => {
          console.error(`Usuario de id ${id} não existe`, err)
        }
      }
    )
  }


  readonly dialog = inject(MatDialog);

  public abrirDialog(funcionario: Funcionario, id:Number) {
    const dialogRef = this.dialog.open(DialogEditComponent, { data: funcionario, width: '500px', height: '570px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.funcionarioService.editarFuncionario(id ,result).subscribe(
          {
            next: (res: Funcionario) => {
              console.log(res)
              this.listarFuncionarios
            },
            error: (err: HttpErrorResponse) => {
              console.log(`Usuario de id ${id} não existe`, err)
            }
          }
        )
      }
    })
  }


}

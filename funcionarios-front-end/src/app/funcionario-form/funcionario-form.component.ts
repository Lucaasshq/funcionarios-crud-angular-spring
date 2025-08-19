import { FuncionarioService } from './../service/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { Funcionario } from '../model/Funcionario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';





@Component({
  selector: 'app-funcionario-form',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit {

  constructor(private funcionarioService: FuncionarioService, private router:Router) {

  }


  ngOnInit(): void {

  }

  salvarFuncionario(funcionarioForm: NgForm) {
    if(!funcionarioForm.valid){
      console.log("Formulário inválido")
      return;
    }

    this.funcionarioService.salvarFuncionario(this.funcionario).subscribe(
      {
        next: (res: Funcionario) => {
          console.log(res);
          funcionarioForm.reset()
          this.router.navigate(["/funcionario-list"])
        },
        error: (err: HttpErrorResponse) => {
          console.log("Erro ao adicionar Funcionario" ,err);
        }
      }
    )
  }



  funcionario: Funcionario = {
    nome: '',
    contato_numero: '',
    endereco: '',
    genero: '',
    departamento: '',
    skills: ''
  };

  skills: string[] = ['Java', 'Angular', 'PHP', 'Spring Boot', 'Docker'];

  skillsSelecionadas: { [key: string]: boolean } = {
    'Java': false,
    'Angular': false,
    'PHP': false,
    'Spring Boot': false,
    'Docker': false,
  }

  getSkillsSelecionadas(): string[] {
    return Object.keys(this.skillsSelecionadas)
      .filter(skill => this.skillsSelecionadas[skill]);
  }

  onSkillChange(skill: string, checked: boolean) {
    this.skillsSelecionadas[skill] = checked;
    this.funcionario.skills = this.getSkillsSelecionadas().join(', ');
  }

  valorSelecionado: string | undefined;

  departamento: any[] = [
    { value: 'TI', viewValue: 'TI' },
    { value: 'RH', viewValue: 'RH' },
    { value: 'Técnico', viewValue: 'TECNICO' },
  ]

  genero: any[] = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Feminino', viewValue: 'Feminino' },
    { value: 'Outro', viewValue: 'Outro' },
  ]


}

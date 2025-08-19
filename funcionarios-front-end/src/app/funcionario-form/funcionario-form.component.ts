import { FuncionarioService } from './../service/funcionario.service';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import { Funcionario } from '../model/Funcionario';
import { HttpClient } from '@angular/common/http';





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

  constructor(private funcionarioService:FuncionarioService){

  }

  funcionario:Funcionario = {
    nome: '',
    contato: '',
    endereco: '',
    genero: '',
    departamento: '',
    skills: []
  };

  skills: string[] = ['Java', 'Angular', 'PHP', 'Spring Boot', 'Docker'];

  skillsSelecionadas:  { [key: string]: boolean } = {
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

  onSkillChange(skill:string, checked:boolean){
    this.skillsSelecionadas[skill] = checked;
    this.funcionario.skills = this.getSkillsSelecionadas();
  }

  salvarFuncionario(funcionarioForm: NgForm){

  }




  ngOnInit(): void {
    
  }

  valorSelecionado:string | undefined;

  departamento:any[] = [
    {value: 'TI', viewValue: 'TI'},
    {value: 'RH', viewValue: 'RH'},
    {value: 'Técnico', viewValue: 'TECNICO'},
  ]

   genero:any[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Feminino', viewValue: 'Feminino'},
    {value: 'Outro', viewValue: 'Outro'},
  ]


}

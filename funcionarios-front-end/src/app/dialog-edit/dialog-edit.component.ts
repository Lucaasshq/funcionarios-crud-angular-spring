import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { Funcionario } from '../model/Funcionario';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from "@angular/cdk/table";

@Component({
  selector: 'app-dialog-edit',
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatSelectModule, CommonModule, MatCheckboxModule, FormsModule, CdkTableModule],
  templateUrl: './dialog-edit.component.html',
  styleUrl: './dialog-edit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogEditComponent {



  constructor(private dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Funcionario) { }

  public salvar() {
    this.dialogRef.close(this.data);
  }

  public cancelar() {
    this.dialogRef.close(true);
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

  skills: string[] = ['Java', 'Angular', 'PHP', 'Spring Boot', 'Docker',];

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
    this.data.skills = this.getSkillsSelecionadas().join(', ');
  }

 
}

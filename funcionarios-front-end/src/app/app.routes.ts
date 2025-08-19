import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'funcionario-form', pathMatch: "full"}, // Rota padrão
    {path: 'funcionario-form', component: FuncionarioFormComponent},
    {path: 'funcionario-list', component: FuncionarioListComponent}
];

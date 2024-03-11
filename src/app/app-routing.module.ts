import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMedicoComponent } from './components/medicos/lista-medico/lista-medico.component';
import { CadastroMedicoComponent } from './components/medicos/cadastro-medico/cadastro-medico.component';
import { AtualizacaoMedicoComponent } from './components/medicos/atualizacao-medico/atualizacao-medico.component';
import { CadastroEspecialidadeComponent } from './components/especialidades/cadastro-especialidade/cadastro-especialidade.component';
import { ListaEspecialidadeComponent } from './components/especialidades/lista-especialidade/lista-especialidade.component';
import { AtualizacaoEspecialidadeComponent } from './components/especialidades/atualizacao-especialidade/atualizacao-especialidade.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarmedicos',
    pathMatch: 'full'
  },
  {
    path: 'listarmedicos',
    component: ListaMedicoComponent
  },
  {
    path: 'cadastrarmedico',
    component: CadastroMedicoComponent
  },
  {
    path: 'atualizarmedico/:id',
    component: AtualizacaoMedicoComponent
  },
  {
    path: 'cadastrar/especialidade',
    component: CadastroEspecialidadeComponent
  },
  {
    path: 'listar/especialidade',
    component: ListaEspecialidadeComponent
  },
  {
    path: 'atualizar/especialidade/:id',
    component: AtualizacaoEspecialidadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

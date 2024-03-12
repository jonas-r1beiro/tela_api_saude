import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMedicoComponent } from './components/medicos/lista-medico/lista-medico.component';
import { CadastroMedicoComponent } from './components/medicos/cadastro-medico/cadastro-medico.component';
import { AtualizacaoMedicoComponent } from './components/medicos/atualizacao-medico/atualizacao-medico.component';
import { CadastroEspecialidadeComponent } from './components/especialidades/cadastro-especialidade/cadastro-especialidade.component';
import { ListaEspecialidadeComponent } from './components/especialidades/lista-especialidade/lista-especialidade.component';
import { AtualizacaoEspecialidadeComponent } from './components/especialidades/atualizacao-especialidade/atualizacao-especialidade.component';
import { ListaPacienteComponent } from './components/pacientes/lista-paciente/lista-paciente.component';
import { CadastroPacienteComponent } from './components/pacientes/cadastro-paciente/cadastro-paciente.component';
import { AtualizacaoPacienteComponent } from './components/pacientes/atualizacao-paciente/atualizacao-paciente.component';
import { CadastroConsultaComponent } from './components/consultas/cadastro-consulta/cadastro-consulta.component';
import { ListaConsultaComponent } from './components/consultas/lista-consulta/lista-consulta.component';
import { AtualizacaoConsultaComponent } from './components/consultas/atualizacao-consulta/atualizacao-consulta.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuEspecialidadeComponent } from './components/especialidades/menu-especialidade/menu-especialidade.component';
import { MenuConsultaComponent } from './components/consultas/menu-consulta/menu-consulta.component';
import { MenuMedicoComponent } from './components/medicos/menu-medico/menu-medico.component';
import { MenuPacienteComponent } from './components/pacientes/menu-paciente/menu-paciente.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MenuComponent
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
  },
  {
    path: 'listar/paciente',
    component: ListaPacienteComponent
  },
  {
    path: 'cadastrar/paciente',
    component: CadastroPacienteComponent
  },
  {
    path: 'atualizar/paciente/:id',
    component: AtualizacaoPacienteComponent
  },
  {
    path: 'cadastrar/consulta',
    component: CadastroConsultaComponent
  },
  {
    path: 'listar/consulta',
    component: ListaConsultaComponent
  },
  {
    path: 'atualizar/consulta/:id',
    component: AtualizacaoConsultaComponent
  },
  {
    path: 'especialidade',
    component: MenuEspecialidadeComponent
  },
  {
    path: 'consulta',
    component: MenuConsultaComponent
  },
  {
    path: 'medico',
    component: MenuMedicoComponent
  },
  {
    path: 'paciente',
    component: MenuPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

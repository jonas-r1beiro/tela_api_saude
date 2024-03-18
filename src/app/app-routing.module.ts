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
import { LoginComponent } from './components/login/login.component';
import { MenuVisaoPacienteComponent } from './components/menu-visao-paciente/menu-visao-paciente.component';
import { InformacoesPacienteComponent } from './components/informacoes-paciente/informacoes-paciente.component';
import { ListaConsultasPacienteComponent } from './components/lista-consultas-paciente/lista-consultas-paciente.component';
import { authGuard } from './core/guards/auth.guard';
import { pacienteGuard } from './core/guards/paciente.guard';
import { funcionarioGuard } from './core/guards/funcionario.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MenuComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'listarmedicos',
    component: ListaMedicoComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'cadastrarmedico',
    component: CadastroMedicoComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'atualizarmedico/:id',
    component: AtualizacaoMedicoComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'cadastrar/especialidade',
    component: CadastroEspecialidadeComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'listar/especialidade',
    component: ListaEspecialidadeComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'atualizar/especialidade/:id',
    component: AtualizacaoEspecialidadeComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'listar/paciente',
    component: ListaPacienteComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'cadastrar/paciente',
    component: CadastroPacienteComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'atualizar/paciente/:id',
    component: AtualizacaoPacienteComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'cadastrar/consulta',
    component: CadastroConsultaComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'listar/consulta',
    component: ListaConsultaComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'atualizar/consulta/:id',
    component: AtualizacaoConsultaComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'especialidade',
    component: MenuEspecialidadeComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'consulta',
    component: MenuConsultaComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'medico',
    component: MenuMedicoComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'paciente',
    component: MenuPacienteComponent,
    canActivate: [authGuard, funcionarioGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu-paciente',
    component: MenuVisaoPacienteComponent,
    canActivate: [authGuard, pacienteGuard]
  },
  {
    path: 'informacoes-paciente',
    component: InformacoesPacienteComponent,
    canActivate: [authGuard,pacienteGuard]
  },
  {
    path: 'lista-consultas-paciente',
    component: ListaConsultasPacienteComponent,
    canActivate: [authGuard, pacienteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

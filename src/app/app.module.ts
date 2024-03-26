import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ListaMedicoComponent } from './components/medicos/lista-medico/lista-medico.component';
import { MenuComponent } from './components/menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CadastroMedicoComponent } from './components/medicos/cadastro-medico/cadastro-medico.component';
import { FormsModule } from '@angular/forms';
import { AtualizacaoMedicoComponent } from './components/medicos/atualizacao-medico/atualizacao-medico.component';
import { CadastroEspecialidadeComponent } from './components/especialidades/cadastro-especialidade/cadastro-especialidade.component';
import { AtualizacaoEspecialidadeComponent } from './components/especialidades/atualizacao-especialidade/atualizacao-especialidade.component';
import { ListaEspecialidadeComponent } from './components/especialidades/lista-especialidade/lista-especialidade.component';
import { CadastroPacienteComponent } from './components/pacientes/cadastro-paciente/cadastro-paciente.component';
import { ListaPacienteComponent } from './components/pacientes/lista-paciente/lista-paciente.component';
import { AtualizacaoPacienteComponent } from './components/pacientes/atualizacao-paciente/atualizacao-paciente.component';
import { AtualizacaoConsultaComponent } from './components/consultas/atualizacao-consulta/atualizacao-consulta.component';
import { CadastroConsultaComponent } from './components/consultas/cadastro-consulta/cadastro-consulta.component';
import { ListaConsultaComponent } from './components/consultas/lista-consulta/lista-consulta.component';
import { MenuEspecialidadeComponent } from './components/especialidades/menu-especialidade/menu-especialidade.component';
import { MenuConsultaComponent } from './components/consultas/menu-consulta/menu-consulta.component';
import { MenuMedicoComponent } from './components/medicos/menu-medico/menu-medico.component';
import { MenuPacienteComponent } from './components/pacientes/menu-paciente/menu-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { InterceptorsInterceptor } from './core/interceptor/interceptors.interceptor';
import { MensagemErroComponent } from './components/mensagem-erro/mensagem-erro.component';
import { MenuVisaoPacienteComponent } from './components/menu-visao-paciente/menu-visao-paciente.component';
import { InformacoesPacienteComponent } from './components/informacoes-paciente/informacoes-paciente.component';
import { ListaConsultasPacienteComponent } from './components/lista-consultas-paciente/lista-consultas-paciente.component';
import { ListaUsuarioComponent } from './components/usuarios/lista-usuario/lista-usuario.component';
import { MenuUsuarioComponent } from './components/usuarios/menu-usuario/menu-usuario.component';
import { CadastroUsuarioComponent } from './components/usuarios/cadastro-usuario/cadastro-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ListaMedicoComponent,
    MenuComponent,
    CadastroMedicoComponent,
    AtualizacaoMedicoComponent,
    CadastroEspecialidadeComponent,
    AtualizacaoEspecialidadeComponent,
    ListaEspecialidadeComponent,
    CadastroPacienteComponent,
    ListaPacienteComponent,
    AtualizacaoPacienteComponent,
    AtualizacaoConsultaComponent,
    CadastroConsultaComponent,
    ListaConsultaComponent,
    MenuEspecialidadeComponent,
    MenuConsultaComponent,
    MenuMedicoComponent,
    MenuPacienteComponent,
    LoginComponent,
    MensagemErroComponent,
    MenuVisaoPacienteComponent,
    InformacoesPacienteComponent,
    ListaConsultasPacienteComponent,
    ListaUsuarioComponent,
    MenuUsuarioComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CabecalhoComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorsInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

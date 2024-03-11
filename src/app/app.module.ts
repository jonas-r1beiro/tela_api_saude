import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ListaMedicoComponent } from './components/medicos/lista-medico/lista-medico.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroMedicoComponent } from './components/medicos/cadastro-medico/cadastro-medico.component';
import { FormsModule } from '@angular/forms';
import { AtualizacaoMedicoComponent } from './components/medicos/atualizacao-medico/atualizacao-medico.component';
import { CadastroEspecialidadeComponent } from './components/especialidades/cadastro-especialidade/cadastro-especialidade.component';
import { AtualizacaoEspecialidadeComponent } from './components/especialidades/atualizacao-especialidade/atualizacao-especialidade.component';
import { ListaEspecialidadeComponent } from './components/especialidades/lista-especialidade/lista-especialidade.component';
import { CadastroPacienteComponent } from './components/pacientes/cadastro-paciente/cadastro-paciente.component';
import { ListaPacienteComponent } from './components/pacientes/lista-paciente/lista-paciente.component';
import { AtualizacaoPacienteComponent } from './components/pacientes/atualizacao-paciente/atualizacao-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
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
    AtualizacaoPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

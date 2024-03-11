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

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ListaMedicoComponent,
    MenuComponent,
    CadastroMedicoComponent,
    AtualizacaoMedicoComponent
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

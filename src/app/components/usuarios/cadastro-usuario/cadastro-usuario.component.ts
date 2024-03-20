import { PapelService } from './../../../core/services/papel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Papel } from 'src/app/core/interfaces/papel';
import { UsuarioCadastro } from 'src/app/core/interfaces/usuario';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Paciente } from '../../pacientes/paciente';
import { PacienteService } from '../../pacientes/paciente.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private papelService: PapelService,
    private pacienteService: PacienteService
  ) { }

  usuario: UsuarioCadastro = {
    id: 0,
    login: '',
    senha: '',
    idExterno: null,
    idPapel: 0
  }

  listaPapeis: Papel[] = [];

  idPapel!: string;
  idExterno!: string;

  listaIdsExternos: Paciente[] = [];

  mensagemErro = '';

  ngOnInit(): void {
    this.papelService.listar().subscribe((listaPapeis) =>{
      this.listaPapeis = this.listaPapeis.concat(listaPapeis);
    });
  }

  cadastrarUsuario(){
    this.usuario.idExterno = parseInt(this.idExterno);
    this.usuario.idPapel = parseInt(this.idPapel);

    this.usuarioService.criar(this.usuario).pipe(
      catchError((erro) =>{
        this.mensagemErro = erro.error;

        return '';
      })
    )
    .subscribe(() =>{
      this.router.navigate(['/listar/usuario']);
    })
  }

  exibirIdExt(){

    if(this.idPapel == '2'){
      this.pacienteService.listar().subscribe((listaPaciente) =>{
        this.listaIdsExternos = this.listaIdsExternos.concat(listaPaciente);
      });
    }else if(this.idPapel == '1'){
      this.listaIdsExternos = [];
    }
  }

}

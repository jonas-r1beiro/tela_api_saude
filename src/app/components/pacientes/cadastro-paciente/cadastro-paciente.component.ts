import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  paciente: Paciente = {
    nome: '',
    dataNascimento: new Date(),
    cpf: '',
    sexo: '',
    alergias: '',
    medicamentos: ''
  }

  mensagemErro = '';

  constructor(
    private service: PacienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarPaciente(){
    this.service.criar(this.paciente).pipe(
      catchError((erro) =>{
        this.mensagemErro = erro.error;
        return '';
      })
    )
    .subscribe(() =>{
      this.router.navigate(['/listar/paciente']);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';

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

  constructor(
    private service: PacienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarPaciente(){
    this.service.criar(this.paciente).subscribe(() =>{
      this.router.navigate(['/listar/paciente']);
    });
  }

}

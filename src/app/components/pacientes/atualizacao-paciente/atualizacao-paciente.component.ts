import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-atualizacao-paciente',
  templateUrl: './atualizacao-paciente.component.html',
  styleUrls: ['./atualizacao-paciente.component.css']
})
export class AtualizacaoPacienteComponent implements OnInit {

  paciente: Paciente = {
    id: 0,
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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id: string | null = '';
    id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.service.buscarPorId(parseInt(id)).subscribe((paciente) =>{
        this.paciente.id = paciente.id;
        this.paciente.nome = paciente.nome;
        this.paciente.dataNascimento = paciente.dataNascimento;
        this.paciente.cpf = paciente.cpf;
        this.paciente.sexo = paciente.sexo;
        this.paciente.alergias = paciente.alergias;
        this.paciente.medicamentos = paciente.medicamentos;
      })
    }
  }

  atualizarPaciente(){
    this.service.editar(this.paciente).pipe(
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

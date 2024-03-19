import { Router } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { ConsultaCadastro } from './../consulta';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MedicoService } from '../../medicos/medico.service';
import { Medico } from '../../medicos/medico';
import { PacienteService } from '../../pacientes/paciente.service';
import { Paciente } from '../../pacientes/paciente';
import { EspecialidadeService } from '../../especialidades/especialidade.service';
import { Especialidade } from '../../especialidades/especialidade';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css'],
  providers: [DatePipe]
})
export class CadastroConsultaComponent implements OnInit {

  mensagemErro!: string;

  consulta: ConsultaCadastro = {
    idPaciente: 0,
    idMedico: 0,
    idEspecialidade: 0,
    dataHora: new Date
  }

  idMedico!: string;
  idPaciente!: string;
  idEspecialidade!: string;

  listaMedico: Medico[] = [];
  listaPaciente: Paciente[] = [];
  listaEsp: Especialidade[] = [];

  constructor(
    private consultaService: ConsultaService,
    private router: Router,
    private datePipe: DatePipe,
    private medicoService: MedicoService,
    private pacienteService: PacienteService,
    private especialdiadeService: EspecialidadeService
  ) { }

  ngOnInit(): void {
    this.medicoService.listar().subscribe((listaMedico) => {
      this.listaMedico = this.listaMedico.concat(listaMedico);
    });

    this.pacienteService.listar().subscribe((listaPaciente) =>{
      this.listaPaciente = this.listaPaciente.concat(listaPaciente);
    })

    this.especialdiadeService.listar().subscribe((listaEsp) =>{
      this.listaEsp = this.listaEsp.concat(listaEsp);
    })

  }

  cadastrarConsulta(){
    this.consulta.idPaciente = parseInt(this.idPaciente);
    this.consulta.idMedico = parseInt(this.idMedico);
    this.consulta.idEspecialidade = parseInt(this.idEspecialidade);


    this.consulta.dataHora = this.datePipe.transform(this.consulta.dataHora, `yyyy-MM-ddTHH:mm:ss`);
    this.consultaService.criar(this.consulta).pipe(
      catchError((erro) =>{
        this.mensagemErro = erro.error;

        return '';
      })
    )
    .subscribe(() =>{
      this.router.navigate(['/listar/consulta']);
    });
  }
}

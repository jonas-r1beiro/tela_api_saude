import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta, ConsultaCadastro } from '../consulta';
import { DatePipe } from '@angular/common';
import { MedicoService } from '../../medicos/medico.service';
import { PacienteService } from '../../pacientes/paciente.service';
import { EspecialidadeService } from '../../especialidades/especialidade.service';
import { Medico } from '../../medicos/medico';
import { Paciente } from '../../pacientes/paciente';
import { Especialidade } from '../../especialidades/especialidade';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-atualizacao-consulta',
  templateUrl: './atualizacao-consulta.component.html',
  styleUrls: ['./atualizacao-consulta.component.css'],
  providers: [DatePipe]
})
export class AtualizacaoConsultaComponent implements OnInit {

  mensagemErro!: string;

  consulta: ConsultaCadastro = {
    id: 0,
    idPaciente: 0,
    idMedico: 0,
    idEspecialidade: 0,
    dataHora: new Date
  }

  listaMedico: Medico[] = [];
  listaPaciente: Paciente[] = [];
  listaEsp: Especialidade[] = [];

  idMedico!: string;
  cpfPaciente!: string;
  nomePaciente!: string;
  idEspecialidade!: string;

  paciente!: Paciente;
  medico!: Medico;
  especialidade!: Especialidade;

  dataHoraTela: Date | undefined;

  constructor(
    private service: ConsultaService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private medicoService: MedicoService,
    private pacienteService: PacienteService,
    private especialdiadeService: EspecialidadeService
  ) {
  }

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

    let id: string | null = '';
    id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(parseInt(id))
      .subscribe((consulta) => {
        this.consulta.id = consulta.id;
        if (consulta.paciente.id) {
          this.consulta.idPaciente = consulta.paciente.id;
          this.pacienteService.buscarPorId(this.consulta.idPaciente).subscribe((paciente) =>{
            this.cpfPaciente = paciente.cpf;
            this.nomePaciente = paciente.nome;
          })
        }
        if (consulta.medico.id) {
          // this.consulta.idMedico = consulta.medico.id;
          this.medico = consulta.medico;
        }
        if (consulta.especialidade.id) {
          // this.consulta.idEspecialidade = consulta.especialidade.id
          this.especialidade = consulta.especialidade;
        }
        this.consulta.dataHora = consulta.dataHora;
      })
    }
  }

  atualizarConsulta() {
    this.consulta.idEspecialidade = parseInt(this.idEspecialidade);
    this.consulta.idMedico = parseInt(this.idMedico);

    this.service.editar(this.consulta).pipe(
      catchError((erro) =>{
        this.mensagemErro = erro.error;

        return of();
      })
    )
    .subscribe(() => {
      this.router.navigate(['/listar/consulta']);
    });
  }

}

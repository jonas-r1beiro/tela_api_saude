import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaCadastro } from '../consulta';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-atualizacao-consulta',
  templateUrl: './atualizacao-consulta.component.html',
  styleUrls: ['./atualizacao-consulta.component.css'],
  providers: [DatePipe]
})
export class AtualizacaoConsultaComponent implements OnInit {

  consulta: ConsultaCadastro = {
    id: 0,
    idPaciente: 0,
    idMedico: 0,
    idEspecialidade: 0,
    dataHora: new Date
  }

  dataHoraTela: Date | undefined;

  constructor(
    private service: ConsultaService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    let id: string | null = '';
    id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(parseInt(id)).subscribe((consulta) => {
        this.consulta.id = consulta.id;
        if (consulta.paciente.id) {
          this.consulta.idPaciente = consulta.paciente.id;
        }
        if (consulta.medico.id) {
          this.consulta.idMedico = consulta.medico.id;
        }
        if (consulta.especialidade.id) {
          this.consulta.idEspecialidade = consulta.especialidade.id
        }
        this.consulta.dataHora = consulta.dataHora;
      })
    }
  }

  atualizarConsulta() {
    this.service.editar(this.consulta).subscribe(() => {
      this.router.navigate(['/listar/consulta']);
    });
  }

}

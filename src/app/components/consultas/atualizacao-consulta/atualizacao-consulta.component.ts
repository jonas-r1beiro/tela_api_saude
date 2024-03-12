import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaCadastro } from '../consulta';

@Component({
  selector: 'app-atualizacao-consulta',
  templateUrl: './atualizacao-consulta.component.html',
  styleUrls: ['./atualizacao-consulta.component.css']
})
export class AtualizacaoConsultaComponent implements OnInit {

  consulta: ConsultaCadastro = {
    id: 0,
    idPaciente: 0,
    idMedico: 0,
    idEspecialidade: 0,
    dataHora: new Date
  }

  constructor(
    private service: ConsultaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let id: string | null = '';
    id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(parseInt(id)).subscribe((consulta) => {
        this.consulta.id = consulta.id;
        if (consulta.idPaciente.id) {
          this.consulta.idPaciente = consulta.idPaciente.id;
        }
        if (consulta.idMedico.id) {
          this.consulta.idMedico = consulta.idMedico.id;
        }
        if (consulta.idEspecialidade.id) {
          this.consulta.idEspecialidade = consulta.idEspecialidade.id
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

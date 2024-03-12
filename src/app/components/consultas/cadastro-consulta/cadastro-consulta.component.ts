import { Router } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { ConsultaCadastro } from './../consulta';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css'],
  providers: [DatePipe]
})
export class CadastroConsultaComponent implements OnInit {

  consulta: ConsultaCadastro = {
    idPaciente: 0,
    idMedico: 0,
    idEspecialidade: 0,
    dataHora: new Date
  }

  constructor(
    private service: ConsultaService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  cadastrarConsulta(){
    this.consulta.dataHora = this.datePipe.transform(this.consulta.dataHora, `yyyy-MM-ddTHH:mm:ss`);
    console.log(this.consulta.dataHora);
    this.service.criar(this.consulta).subscribe(() =>{
      this.router.navigate(['/listar/consulta']);
    });
  }
}

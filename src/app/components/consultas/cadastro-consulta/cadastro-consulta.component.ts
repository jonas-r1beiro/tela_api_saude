import { Router } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { ConsultaCadastro } from './../consulta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css']
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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarConsulta(){
    console.log(this.consulta.dataHora);
    this.service.criar(this.consulta).subscribe(() =>{
      this.router.navigate(['/listar/consulta']);
    });
  }
}

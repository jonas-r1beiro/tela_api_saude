import { Paciente } from './../../pacientes/paciente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { Consulta } from '../consulta';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.css'],
  providers: [DatePipe]
})
export class ListaConsultaComponent implements OnInit {

  offset = (new Date().getTimezoneOffset());

  listaConsulta: Consulta[] = [];

  idPaciente: Paciente | undefined;

  cpfConsulta: string = '';

  regex = /^\d{0,11}$/;

  mensagemErro = '';


  constructor(
    private service: ConsultaService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaConsulta) =>{
      this.listaConsulta = this.listaConsulta.concat(listaConsulta);

      this.listaConsulta.forEach((consulta) =>{
        consulta.dataHora.setHours(2);
      })
    });
  }

  recarregarComponent(){
    this.mensagemErro = '';

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  deletarConsulta(id: number){
    this.service.excluir(id).subscribe(() =>{
      this.recarregarComponent();
    });
  }

  pesquisarPorCpf(){
    this.service.buscarPorCpf(this.cpfConsulta).subscribe((listaConsulta) =>{
      this.listaConsulta = [];
      this.listaConsulta = this.listaConsulta.concat(listaConsulta);


      if(listaConsulta.length == 0){
        this.mensagemErro = 'Não há resultados para essa pesquisa';
        this.service.listar().subscribe((listaConsulta) =>{
          this.listaConsulta = this.listaConsulta.concat(listaConsulta);
        });
      }else{
        this.mensagemErro = '';
      }


    })
  }

  limparPesquisa(){

    this.cpfConsulta = '';
    this.mensagemErro = '';

    this.service.listar().subscribe((listaConsulta) =>{
      this.listaConsulta = [];
      this.listaConsulta = this.listaConsulta.concat(listaConsulta);
    })
  }

}

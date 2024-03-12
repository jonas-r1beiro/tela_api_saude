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

  listaConsulta: Consulta[] = [];

  horarioTela: string | undefined = '';

  constructor(
    private service: ConsultaService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaConsulta) =>{
      this.listaConsulta = this.listaConsulta.concat(listaConsulta);
      this.listaConsulta.forEach((consulta) =>{
        const dh = new Date(consulta.dataHora);
        dh.setHours(dh.getHours() + 3);
        this.horarioTela = this.datePipe.transform(dh, 'dd/MM/yyyy HH:mm')?.toString();
        console.log(this.horarioTela);
      })
      console.log(this.listaConsulta[0]);
    });
  }

  recarregarComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  deletarConsulta(id: number){
    this.service.excluir(id).subscribe(() =>{
      this.recarregarComponent();
    });
  }

}

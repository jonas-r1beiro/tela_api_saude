import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { Consulta } from '../consulta';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.css']
})
export class ListaConsultaComponent implements OnInit {

  listaConsulta: Consulta[] = [];

  constructor(
    private service: ConsultaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaConsulta) =>{
      this.listaConsulta = this.listaConsulta.concat(listaConsulta);
      console.log(this.listaConsulta);
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

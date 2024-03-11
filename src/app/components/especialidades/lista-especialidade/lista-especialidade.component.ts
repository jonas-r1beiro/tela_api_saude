import { Component, OnInit } from '@angular/core';
import { EspecialidadeService } from '../especialidade.service';
import { Router } from '@angular/router';
import { Especialidade } from '../especialidade';

@Component({
  selector: 'app-lista-especialidade',
  templateUrl: './lista-especialidade.component.html',
  styleUrls: ['./lista-especialidade.component.css']
})
export class ListaEspecialidadeComponent implements OnInit {

  listaEsp: Especialidade[] = [];

  constructor(
    private service: EspecialidadeService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaEsp) =>{
      this.listaEsp = this.listaEsp.concat(listaEsp);
    });
  }

  recarregarComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  deletarEspecialidade(id: number){
    this.service.excluir(id).subscribe(() =>{
      this.recarregarComponent();
    });
  }

}

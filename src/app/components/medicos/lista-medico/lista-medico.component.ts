import { Medico } from './../medico';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-lista-medico',
  templateUrl: './lista-medico.component.html',
  styleUrls: ['./lista-medico.component.css']
})
export class ListaMedicoComponent implements OnInit {
  listaMedicos: Medico[] = [];

  constructor(
    private service: MedicoService,
    private router: Router
    ) {
    }

    ngOnInit(): void {
      this.service.listar().subscribe((listaMedicos) =>{
        this.listaMedicos = this.listaMedicos.concat(listaMedicos);
      });
    }

  recarregarComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  deletarMedico(id: number){
    this.service.excluir(id).subscribe((retorno) =>{
      console.log('Retorno: ' ,retorno);
      this.recarregarComponent();
    });
  }
}

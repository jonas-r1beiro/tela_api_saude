import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  listaPacientes: Paciente[] = [];

  constructor(
    private service: PacienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPacientes) =>{
      this.listaPacientes = this.listaPacientes.concat(listaPacientes);
    });
  }

  recarregarComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  deletarPaciente(id: number){
    this.service.excluir(id).subscribe(() =>{
      this.recarregarComponent();
    });
  }

}

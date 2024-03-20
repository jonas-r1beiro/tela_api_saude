import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/interfaces/usuario';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaUsuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe((listaUsuarios) =>{
      this.listaUsuarios = this.listaUsuarios.concat(listaUsuarios);
    });
  }

  recarregarComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  deletarPaciente(id: number){
    this.usuarioService.excluir(id).subscribe(() =>{
      this.recarregarComponent();
    });
  }

}

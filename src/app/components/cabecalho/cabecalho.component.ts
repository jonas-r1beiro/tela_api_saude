import { CabecalhoService } from './../../core/services/cabecalho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private cabecalhoService: CabecalhoService
  ) {
    router.events.subscribe(() =>{
      if(this.userService.estaLogado()){
        this.estaLogado = true;
        this.papel = this.userService.getUsuario().sub;

      }else{
        this.estaLogado = false;
        this.papel = '';
      }


    })
  }

  estaLogado: boolean = false;
  papel: string = '';

  ngOnInit(): void {
  }

  logout(){
    if(this.userService.estaLogado()){
      this.userService.logout();
    }

    this.router.navigate(['/login']);
  }

  irHomePage(){
    let usuario = this.userService.getUsuario();

    if(usuario.sub == "Paciente"){
      this.router.navigate(['/menu-paciente']);
    }else{
      this.router.navigate(['/home']);
    }
  }

}

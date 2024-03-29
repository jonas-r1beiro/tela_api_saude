import { CabecalhoService } from './../../core/services/cabecalho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
  standalone: true,
  imports: [NgIf]
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
        this.idPapel = this.userService.getUsuario().idPapel;

      }else{
        this.estaLogado = false;
        this.idPapel = 0;
      }


    })
  }

  estaLogado: boolean = false;
  idPapel: number = 0;

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

    if(usuario.idPapel == 2){
      this.router.navigate(['/menu-paciente']);
    }else{
      this.router.navigate(['/home']);
    }
  }

}

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
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    if(this.userService.estaLogado()){
      this.userService.logout();
    }

    this.router.navigate(['/login']);
  }

}

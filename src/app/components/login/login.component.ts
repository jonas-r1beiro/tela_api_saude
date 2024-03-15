import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: string;

  senha!: string;

  constructor(
    private service: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  fazerLogin() {

    this.service.autenticar(this.usuario, this.senha).subscribe((response) =>{
      this.router.navigate(['/home']);
    })
  }

}

import { Component, OnInit } from '@angular/core';
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
    private service: AutenticacaoService
  ) { }

  ngOnInit(): void {
  }

  fazerLogin() {

    this.service.autenticar(this.usuario, this.senha).subscribe((response) =>{
      console.log(response);
    })
  }

}

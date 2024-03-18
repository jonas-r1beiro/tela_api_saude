import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableInput, catchError, throwError } from 'rxjs';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: string;

  senha!: string;

  mensagemErroAuten!: string;

  constructor(
    private service: AutenticacaoService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  fazerLogin() {

    this.service.autenticar(this.usuario, this.senha).pipe(
      catchError((erro: any) =>{
        this.mensagemErroAuten = 'Usuário ou/e senha incorreto(s)';

        return '';
      })
    )
    .subscribe(() =>{
      let usuario = this.userService.getUsuario();

      if(usuario.sub == "Paciente"){
        this.router.navigate(['/menu-paciente']);
      }else{
        this.router.navigate(['/home']);
      }

    });
  }

}

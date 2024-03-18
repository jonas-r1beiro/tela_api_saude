import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspecialidadeService } from '../especialidade.service';
import { Especialidade } from '../especialidade';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-cadastro-especialidade',
  templateUrl: './cadastro-especialidade.component.html',
  styleUrls: ['./cadastro-especialidade.component.css']
})
export class CadastroEspecialidadeComponent implements OnInit {

  especialidade: Especialidade = {
    nome: ''
  }

  mensagemErro!: string;

  constructor(
    private service: EspecialidadeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarEspecialidade(){
    this.service.criar(this.especialidade).pipe(
      catchError((erro) =>{
        this.mensagemErro = erro.error;

        return ''
      })
    )
    .subscribe(() =>{
      this.router.navigate(['/listar/especialidade']);
    });
  }
}

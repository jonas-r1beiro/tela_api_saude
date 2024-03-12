import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspecialidadeService } from '../especialidade.service';
import { Especialidade } from '../especialidade';

@Component({
  selector: 'app-cadastro-especialidade',
  templateUrl: './cadastro-especialidade.component.html',
  styleUrls: ['./cadastro-especialidade.component.css']
})
export class CadastroEspecialidadeComponent implements OnInit {

  especialidade: Especialidade = {
    nome: ''
  }

  constructor(
    private service: EspecialidadeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarEspecialidade(){
    this.service.criar(this.especialidade).subscribe(() =>{
      this.router.navigate(['/listar/especialidade']);
    });
  }
}

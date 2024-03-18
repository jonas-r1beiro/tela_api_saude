import { ActivatedRoute, Router } from '@angular/router';
import { Especialidade } from './../especialidade';
import { Component, OnInit } from '@angular/core';
import { EspecialidadeService } from '../especialidade.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-atualizacao-especialidade',
  templateUrl: './atualizacao-especialidade.component.html',
  styleUrls: ['./atualizacao-especialidade.component.css']
})
export class AtualizacaoEspecialidadeComponent implements OnInit {

  especialidade: Especialidade = {
    id: 0,
    nome: ''
  }

  mensagemErro = '';

  constructor(
    private service: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id: string | null = '';
    id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.service.buscarPorId(parseInt(id)).subscribe((especialidade) =>{
        this.especialidade.nome = especialidade.nome;
        this.especialidade.id = especialidade.id;
      })
    }
  }

  atualizarEspecialidade(){
    this.service.editar(this.especialidade).pipe(
      catchError((erro) =>{
        this.mensagemErro = erro.error;
        return '';
      })
    )
    .subscribe(() =>{
      this.router.navigate(['/listar/especialidade']);
    });
  }

}

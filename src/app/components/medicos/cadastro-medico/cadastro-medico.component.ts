import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { Router } from '@angular/router';
import { Medico, MedicoCadastro } from '../medico';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css']
})
export class CadastroMedicoComponent implements OnInit {

  valorEspecialidades = '';

  medico: MedicoCadastro = {
    nome: '',
    crm: '',
    especialidades: []
  }

  mensagemErro = '';

  constructor(
    private service: MedicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarMedico(){
    this.medico.especialidades = [];

    this.valorEspecialidades.split(/[^0-9]+/).forEach((esp) =>{
      this.medico.especialidades.push(parseInt(esp));
    });

    this.service.criar(this.medico).pipe(
      catchError((erro) =>{
        this.mensagemErro = erro.error;
        return '';
      })
    )
    .subscribe(() =>{
      this.router.navigate(['/listarmedicos']);
    });
  }

}

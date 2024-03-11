import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { Router } from '@angular/router';
import { Medico, MedicoCadastro } from '../medico';

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

    this.service.criar(this.medico).subscribe((resp) =>{
      console.log(resp);
      this.router.navigate(['/listarmedicos']);
    });
  }

}

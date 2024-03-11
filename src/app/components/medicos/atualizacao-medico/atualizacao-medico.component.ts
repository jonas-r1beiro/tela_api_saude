import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoCadastro } from '../medico';

@Component({
  selector: 'app-atualizacao-medico',
  templateUrl: './atualizacao-medico.component.html',
  styleUrls: ['./atualizacao-medico.component.css']
})
export class AtualizacaoMedicoComponent implements OnInit {

  medico: MedicoCadastro = {
    id: 0,
    nome: '',
    crm: '',
    especialidades: []
  }

  valorEspecialidade = '';

  constructor(
    private service: MedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id: string | null = '';
    id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.service.buscarPorId(parseInt(id)).subscribe((medico) =>{
        this.medico.nome = medico.nome;
        this.medico.crm = medico.crm;
        this.medico.id = medico.id;
        medico.especialidades.forEach((especialidade) =>{
          if(especialidade.id){
            this.valorEspecialidade = this.valorEspecialidade.concat(especialidade.id.toString() + ', ');
          }
        })
      })
    }
  }

  atualizarMedico(){
    this.medico.especialidades = [];

    this.valorEspecialidade.split(/[^0-9]+/).forEach((esp) =>{
      this.medico.especialidades.push(parseInt(esp));
    });

    this.service.editar(this.medico).subscribe(() =>{
      this.router.navigate(['/listarmedicos']);
    })
  }

}

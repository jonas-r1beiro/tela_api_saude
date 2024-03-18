import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { PacienteService } from '../pacientes/paciente.service';
import { Paciente } from '../pacientes/paciente';

@Component({
  selector: 'app-informacoes-paciente',
  templateUrl: './informacoes-paciente.component.html',
  styleUrls: ['./informacoes-paciente.component.css']
})
export class InformacoesPacienteComponent implements OnInit {

  constructor(
    private userService: UserService,
    private pacienteService: PacienteService
  ) { }

  paciente!: Paciente;

  ngOnInit(): void {
    let usuario = this.userService.getUsuario();

    if(usuario.idExterno){
      this.pacienteService.buscarPorId(usuario.idExterno).subscribe((paciente)=>{
        this.paciente = paciente;
        console.log(this.paciente);
      });
    }

  }



}

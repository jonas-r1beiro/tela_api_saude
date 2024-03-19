import { Paciente } from './../pacientes/paciente';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../pacientes/paciente.service';
import { ConsultaService } from '../consultas/consulta.service';
import { UserService } from 'src/app/core/services/user.service';
import { Consulta } from '../consultas/consulta';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-consultas-paciente',
  templateUrl: './lista-consultas-paciente.component.html',
  styleUrls: ['./lista-consultas-paciente.component.css'],
  providers: [DatePipe]
})
export class ListaConsultasPacienteComponent implements OnInit {

  constructor(
    private pacienteService: PacienteService,
    private consultaService: ConsultaService,
    private userService: UserService,
    private datePipe: DatePipe
  ) { }

  listaConsulta: Consulta[] = [];

  horarioTela!: string | undefined;

  ngOnInit(): void {

    let usuario = this.userService.getUsuario();

    if(usuario.idExterno){
      this.consultaService.buscarPorIdPaciente(usuario.idExterno).subscribe((listaConsulta) =>{
        this.listaConsulta = this.listaConsulta.concat(listaConsulta);


        this.listaConsulta.forEach((consulta) =>{
          const dh = new Date(consulta.dataHora);
          dh.setHours(dh.getHours() + 3);

          this.horarioTela = this.datePipe.transform(dh, 'dd/MM/yyyy HH:mm')?.toString();
        })
      })
    }


  }

}

import { Especialidade } from "../especialidades/especialidade"
import { Medico } from "../medicos/medico"
import { Paciente } from "../pacientes/paciente"

export interface ConsultaCadastro{
  id?: number,
  idPaciente: number,
  idMedico: number,
  idEspecialidade: number,
  dataHora: Date
}

export interface Consulta{
  id?: number,
  idPaciente: Paciente,
  idMedico: Medico,
  idEspecialidade: Especialidade,
  dataHora: Date
}

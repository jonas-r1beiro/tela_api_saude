import { Especialidade } from "../especialidades/especialidade"
import { Medico } from "../medicos/medico"
import { Paciente } from "../pacientes/paciente"

export interface ConsultaCadastro{
  id?: number,
  idPaciente: number,
  idMedico: number,
  idEspecialidade: number,
  dataHora: Date | string | null
}

export interface Consulta{
  id?: number,
  paciente: Paciente,
  medico: Medico,
  especialidade: Especialidade,
  dataHora: Date
}

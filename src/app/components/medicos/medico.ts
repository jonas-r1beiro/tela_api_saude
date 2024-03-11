import { Especialidade } from "../especialidades/especialidade";

export interface Medico{
  id?: number,
  nome: string,
  crm: string,
  especialidades: Especialidade[]
}

export interface MedicoCadastro{
  id?: number,
  nome: string,
  crm: string,
  especialidades: number[]
}

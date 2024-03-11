export interface Paciente{
  id?: number,
  nome: string,
  dataNascimento: Date
  cpf: string,
  sexo: string,
  alergias: string | null,
  medicamentos: string | null
}

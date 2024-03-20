import { Papel } from "./papel"

export interface Usuario{
  id?: number,
  login: string,
  senha?: string,
  idExterno: number | null
  papel: Papel
}

export interface UsuarioCadastro{
  id?: number,
  login: string,
  senha?: string,
  idExterno: number | null
  idPapel: number
}

export interface Contato {
  id?: number;
  nome: string;
  telefone: string;
}

export interface ContatoUpdate {
  nome?: string;
  telefone?: string;
}

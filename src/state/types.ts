export type FieldKey = 'nome' | 'endereco' | 'telefone' | 'email';

export type Answer = 'ok' | 'edit' | null;

export type Answers = Record<FieldKey, Answer>;

export type Values = Record<FieldKey, string>;

export interface FieldStatus {
  border: string;
  bg: string;
  color: string;
}

export interface Tag {
  label: string;
  color: string;
  bg: string;
}

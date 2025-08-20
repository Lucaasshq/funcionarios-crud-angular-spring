export interface Funcionario {
    id?:Number | undefined
    nome:string;
    contato_numero:string;
    endereco:string;
    genero:string;
    departamento:string;
    skills:string;
}

export interface FuncionarioResponseId {
    nome:string;
    contato_numero:string;
    endereco:string;
    genero:string;
    departamento:string;
    skills:string;
}

export interface FuncionarioResponse {
    content: Funcionario[];
}
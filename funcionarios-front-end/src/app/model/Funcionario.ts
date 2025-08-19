export interface Funcionario {
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
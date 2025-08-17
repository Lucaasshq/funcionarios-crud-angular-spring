CREATE TABLE funcionario (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato_numero VARCHAR(50),
    endereco VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    departamento  VARCHAR(50) NOT NULL,
    skills VARCHAR(50) NOT NULL
);

INSERT INTO funcionario (nome, contato_numero, endereco, genero, departamento, skills)
VALUES
('Lucas Henrique', '11987654321', 'Rua das Palmeiras, 123 - São Paulo', 'Masculino', 'TI', 'Java, Spring Boot'),

('Mariana Silva', '21998765432', 'Av. Brasil, 456 - Rio de Janeiro', 'Feminino', 'Recursos Humanos', 'Comunicação, Recrutamento'),

('Carlos Souza', '31987651234', 'Rua Minas Gerais, 789 - Belo Horizonte', 'Masculino', 'Financeiro', 'Excel, Contabilidade'),

('Ana Oliveira', '41976543210', 'Av. Curitiba, 321 - Curitiba', 'Feminino', 'Marketing', 'SEO, Copywriting'),

('João Pereira', '51987654321', 'Rua Porto Alegre, 654 - Porto Alegre', 'Masculino', 'Vendas', 'Negociação, CRM');

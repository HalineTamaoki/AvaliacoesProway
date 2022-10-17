## -- CRIANDO AS TABELAS -- ##

CREATE TABLE empresa (
	id int primary key auto_increment,
    nome varchar(30),
    cnpj varchar (14)
);

CREATE TABLE contatos_clientes(
	id int primary key auto_increment,
    nome varchar (15),
    email varchar(30), 
    telefone varchar (11),
    idEmpresa int,
    constraint fk_empresa foreign key (idEmpresa) references empresa(id)
);

CREATE TABLE vendas(
	id int primary key auto_increment,
    dataVenda datetime, 
    preco float,
    idContatoCliente int,
	constraint fk_contato foreign key (idContatoCliente) references contatos_clientes(id)
);

CREATE TABLE projetos(
	id int primary key auto_increment,
    statusProjeto varchar(15), 
    dataInicio datetime default null,
    dataTerminoEstimado datetime default null,
    dataTerminoReal datetime default null,
    idVenda int,
	constraint fk_venda foreign key (idVenda) references vendas(id)
);

CREATE TABLE materiais(
	id int primary key auto_increment,
    nome varchar(30),
    precoUnitario float
);

CREATE TABLE materiais_projeto(
	idMaterial int,
    idProjeto int,
    quantidade int,
    primary key(idMaterial, idProjeto),
	constraint fk_projeto_material foreign key (idProjeto) references projetos(id),
	constraint fk_material foreign key (idMaterial) references materiais(id)
);

CREATE TABLE funcionarios(
	id int primary key auto_increment,
    nome varchar (15),
    salario float
);

CREATE TABLE equipe_projeto(
	idFuncionario int,
    idProjeto int,
    funcao varchar(25),
    horasDedicadasDiaria float, 
    primary key(idFuncionario, idProjeto),
	constraint fk_projeto_funcionario foreign key (idProjeto) references projetos(id),
	constraint fk_funcionario foreign key (idFuncionario) references funcionarios(id)
);
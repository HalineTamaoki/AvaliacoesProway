## -- INSERINDO DADOS -- ##

#1. Inserindo empresas
INSERT INTO empresa(nome, cnpj) values
	('AES Energia' ,'04128563000110'),
	('BANCO INTER' ,'00416968000101'),
	('CIELO' ,'01027058000191'),
	('EDP – ENERGIAS DO BRASIL' ,'03983431000103'),
	('GERDAU' ,'33611500000119'),
	('ITAU UNIBANCO' ,'60872504000123'),
	('KLABIN' ,'89637490000145'),
	('LOJAS MARISA' ,'61189288000189'),
	('OI' ,'76535764000143'),
	('SUZANO' ,'60651809000105');

#2. Inserindo contatos
INSERT INTO contatos_clientes(nome, email, telefone, idEmpresa) values
	('Miguel' ,'miguel@gmail.com', '14923131242', 1),
	('Arthur' ,'arthur@gmail.com', '11985653232', 2),
	('Gael' ,'gael@gmail.com', '15981251652', 3),
	('Heitor' ,'heitor@gmail.com', '32415645215', 4),
	('Helena' ,'helena@gmail.com', '23945164181', 5),
	('Alice' ,'alice@gmail.com', '60952613122', 6),
	('Theo' ,'theo@gmail.com', '54925618416', 7),
	('Laura' ,'laura@gmail.com', '11569841565', 8),
	('Davi ' ,'davi @gmail.com', '14989563233', 9),
	('Gabriel' ,'gabriel@gmail.com', '32986251111', 10),
	('Guilherme' ,'guilherme@gmail.com', '66894564122', 1),
	('Lucas' ,'lucas@gmail.com', '41968985625', 2),
	('Manoela' ,'manoela@gmail.com', '21982362565', 1),
	('Isabella' ,'isabella@gmail.com', '33957825148', 2),
	('Julia' ,'julia@gmail.com', '57985324635', 6),
	('Joaquim' ,'joaquim@gmail.com', '34982564841', 7),
	('Cecília' ,'cecília@gmail.com', '68985212185', 4);

#3. Inserindo materiais
INSERT INTO materiais(nome, precoUnitario) values
	('Cadeira presidente', 500),
	('Cadeira simples', 100),
	('Mesa individual', 100),
	('Mesa bancada', 500),
	('Mesa individual com gaveta', 300),
	('Mesa bancada com gaveta', 800),
	('Lustre', 1000),
	('Quadro', 50),
	('Papel de Parede', 50),
	('Porta', 1000);

#4. Inserindo funcionários
INSERT INTO funcionarios(nome, salario) values
	('Bernardo', 5000),
	('Samuel', 3000),
	('Valentina', 5000),
	('João Miguel', 7000),
	('Enzo', 2000),
	('Heloíza', 5000),
	('Pedro', 2000),
	('Lorenzo', 6000),
	('Sophia', 10000),
	('Maria Clara', 12000);
    
#5. Inserindo vendas
call cadastrarVenda('2022-09-08', 10000, 3);
call cadastrarVenda('2019-03-14', 20000, 2);
call cadastrarVenda('2021-08-08', 30000, 12);
call cadastrarVenda('2014-08-31', 80000, 7);
call cadastrarVenda('2020-04-23', 50000, 4);
call cadastrarVenda('2021-12-25', 65000, 5);
call cadastrarVenda('2010-05-23', 15000, 1);
call cadastrarVenda('2020-02-15', 25000, 15);
call cadastrarVenda('2022-06-03', 90000, 8);
call cadastrarVenda('2022-01-10', 80000, 10);
call cadastrarVenda('2022-10-17', 100000, 8);
call cadastrarVenda('2022-10-11', 3000, 14);
call cadastrarVenda('2022-09-08', 2000, 14);
call cadastrarVenda('2022-10-08', 5000, 2);

#6. Inserindo materiais nos projetos
call cadastrarMateriaisProjeto(4, 6, 4);
call cadastrarMateriaisProjeto(2, 4, 7);
call cadastrarMateriaisProjeto(5, 5, 3);
call cadastrarMateriaisProjeto(7, 6, 3);
call cadastrarMateriaisProjeto(4, 7, 10);
call cadastrarMateriaisProjeto(3, 1, 6);
call cadastrarMateriaisProjeto(10, 2, 2);
call cadastrarMateriaisProjeto(2, 5, 20);
call cadastrarMateriaisProjeto(5, 6, 1);
call cadastrarMateriaisProjeto(8, 9, 6);

#7. Inserindo pessoas no projeto
call cadastrarEquipeProjeto(2, 5, 2, 'Decorador');
call cadastrarEquipeProjeto(2, 2, 2, 'Designer');
call cadastrarEquipeProjeto(2, 6, 2, 'Arquiteto');
call cadastrarEquipeProjeto(2, 1, 2, 'Decorador');
call cadastrarEquipeProjeto(3, 6, 4, 'gerente de projetos');
call cadastrarEquipeProjeto(3, 5, 2, 'Arquiteto');
call cadastrarEquipeProjeto(4, 8, 1, 'Designer');
call cadastrarEquipeProjeto(4, 6, 1, 'Decorador');
call cadastrarEquipeProjeto(5, 7, 8, 'gerente de projetos');
call cadastrarEquipeProjeto(6, 10, 2, 'gerente de projetos');
call cadastrarEquipeProjeto(6, 4, 2, 'Decorador');
call cadastrarEquipeProjeto(6, 3, 2, 'gerente de projetos');
call cadastrarEquipeProjeto(8, 2, 3, 'Arquiteto');
call cadastrarEquipeProjeto(8, 1, 3, 'Decorador');
call cadastrarEquipeProjeto(8, 10, 2, 'Decorador');
call cadastrarEquipeProjeto(9, 9, 2, 'Arquiteto');
call cadastrarEquipeProjeto(9, 1, 2, 'Arquiteto');
call cadastrarEquipeProjeto(9, 2, 2, 'Decorador');
call cadastrarEquipeProjeto(10, 5, 4, 'gerente de projetos');
call cadastrarEquipeProjeto(10, 6, 4, 'gerente de projetos');

## -- CRIANDO AS TABELAS -- ##
#1. Alterar o status do projeto para iniciá-lo
call iniciarProjeto(1, '2022-09-10', '2023-03-21');
call iniciarProjeto(2, '2019-05-28', '2021-03-28');
call iniciarProjeto(3, '2021-09-08', '2022-08-30');
call iniciarProjeto(4, '2014-09-01', '2015-01-02');
call iniciarProjeto(5, '2020-05-25', '2022-05-25');
call iniciarProjeto(6, '2022-01-05', '2024-01-05');
call iniciarProjeto(7, '2010-05-30', '2012-05-15');
call iniciarProjeto(8, '2020-03-15', '2021-07-01');
call iniciarProjeto(9, '2022-08-06', '2023-05-30');
call iniciarProjeto(10, '2022-01-30', '2023-12-25');

#2. Alterar o status do projeto para marcar ele como concluído
call finalizarProjeto(2, '2021-05-28');
call finalizarProjeto(3, '2022-03-30');
call finalizarProjeto(4, '2015-03-02');
call finalizarProjeto(7, '2012-05-15');
call finalizarProjeto(8, '2021-04-02');

#3. Alterar projeto
update projetos set 
    dataTerminoEstimado =  '2022-11-01'
	where id = 5;

#4. Alterar funcionário
update funcionarios set 
    salario = 3000
	where id = 7;

#5. Alterar materiais_projeto
call alterarMateriaisProjeto(4, 14, 10);

#6. Alterar empresa
update empresa set 
    cnpj = '3458571700064'
	where id = 7;
    
#7. Alterar contato cliente
update contatos_clientes set 
    telefone = '11923329485'
	where id = 7;
    
#8. Alterar Equipe Projeto
	call alterarEquipeProjeto(4,16,1,'Designer');

#9. Alterar Venda
update vendas set
	preco = 16000
    where id = 7;

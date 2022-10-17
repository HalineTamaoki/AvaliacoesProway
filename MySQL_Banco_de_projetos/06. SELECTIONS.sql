## -- CRIAR COMANDOS DQL -- ##
    
## -- PARA SELECIONAR AS VIEWS -- ##
#1 Mostrar a o custo com salários dos integrantes das equipes dos projetos
select * from view_salarios_equipes;

#2 Ver todos os projetos e a data das vendas com o status em andamento, cuja data de venda foi a partir de 2020
select * from view_projetos_pos_2020;

#3 Ver todas as vendas realizadas para a empresa BANCO INTER e o nome do contato do cliente responsável pela venda
select * from view_vendas_inter;

#4.	Ver o custo dos materiais (considerando custo = quantidade * precoUnitario) por projeto
select * from view_materiais_projeto;

/*5 Para cada projeto, o nome da empresa, o nome do contato, a data da venda, o status e 
	o custo do projeto (considerando custo = custo com materiais + custo com pessoas)*/
select * from view_dados_projetos;

#6. Ver em quantos projetos o funcionário está alocado. Mostrar se ele não estiver alocado em nenhum projeto
select * from view_projetos_por_funcionarios;

/*7.	Listar o nome de todas as empresas e o nome do contato dos representantes dessa empresa, 
  se não houver representantes cadastrados para a empresa*/
select * from view_contato_empresa;

/*8. Mostrar o id de todos os projetos e a data de início no formato dia/mês/ano
 iniciados entre 2020 e a data de hoje, cujo status esteja como em andamento*/
 select * from view_projeto_data;
 
#9. Mostrar quantos projetos foram vendidos para empresa CIELO e na mesma consulta, mostrar quantos foram para empresa BANCO INTER
select * from view_vendas_cielo_or_inter;

#10. Mostrar os nomes dos materiais que contenham a palavra "Mesa", o preço, e	ordenando de maneira crescente pelo preço
    select * from view_mesa;

#11. Mostrar que tem o maior salário e se o salário é superior a R$10.000,00
    select * from view_maior_salario;

#12. Mostrar que tem o menor salário e seu salário
    select * from view_menor_salario;

#13. Para cada pessoa, mostrar se o salário é menor que R$3.000, maior que R$3.000 ou maior que R$5.000
    select * from view_faixa_salarial;
    
#14. Listar o nome de todas as pessoas que atuam em 2 ou mais projetos
	select * from view_2_projects;
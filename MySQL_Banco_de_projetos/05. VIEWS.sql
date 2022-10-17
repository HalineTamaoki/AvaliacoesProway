## -- CRIAR VIEWS -- ##

## -- COM INNER JOIN -- ## 
# 1. Mostrar a o custo com salários dos integrantes das equipes dos projetos
create view view_salarios_equipes as 
	select ep.idProjeto as idProjeto, round(sum(f.salario/240*ep.horasDedicadasDiaria),2) as custoSalarios
    from equipe_projeto ep
    inner join funcionarios f on ep.idFuncionario = f.id
    group by ep.idProjeto
    order by idProjeto;

#2. Ver todos os projetos e a data das vendas com o status em andamento, cuja data de venda foi a partir de 2020
create view  view_projetos_pos_2020 as 
	select p.id, DATE_FORMAT(v.dataVenda, "%d %M %Y") as dataVenda
    from projetos p inner join vendas v on p.idVenda = v.id
    where YEAR(v.dataVenda)>2019 and
		p.statusProjeto = 'Em andamento';

#3. Ver todas as vendas realizadas para a empresa BANCO INTER e o nome do contato do cliente responsável pela venda
create view view_vendas_inter as 
	select v.id, cc.nome
	from vendas v 
    inner join contatos_clientes cc on v.idContatoCliente = cc.id
    inner join empresa e on cc.idEmpresa = e.id
    where e.nome = 'BANCO INTER';
    
#4.	Ver o custo dos materiais (considerando custo = quantidade * precoUnitario) por projeto
create view view_materiais_projeto as 
	select p.id as id, sum(mp.quantidade*m.precoUnitario) as custoMaterial
    from projetos p
    inner join materiais_projeto mp on p.id = mp.idProjeto
    inner join materiais m on m.id = mp.idMaterial
    group by p.id
    order by p.id;
    
/*5 Para cada projeto, o nome da empresa, o nome do contato, a data da venda, o status e 
	o custo do projeto (considerando custo = custo com materiais + custo com pessoas)*/
create view view_dados_projetos as
	select p.id, e.nome as empresa, cc.nome as nomeContato, DATE_FORMAT(v.dataVenda, "%d %M %Y") as dataVenda, p.statusProjeto, (vmp.custoMaterial + vse.SomaSalarios) as custo
    from projetos p 
    inner join vendas v on v.id = p.idVenda
    inner join contatos_clientes cc on v.idContatoCliente = cc.id
    inner join empresa e on e.id = cc.idEmpresa
    inner join view_materiais_projeto vmp on p.id = vmp.id
    inner join view_salarios_equipes vse on p.id = vse.idProjeto
    group by p.id
    order by p.id;

## -- COM LEFT JOIN -- ## 
#6. Ver em quantos projetos o funcionário está alocado. Mostrar se ele não estiver alocado em nenhum projeto
create view view_projetos_por_funcionarios as
	select f.nome, count(ep.idProjeto) as qtdeProjetos
    from funcionarios f 
    left join equipe_projeto ep on f.id = ep.idFuncionario
    group by f.nome;
    
## -- COM RIGHT JOIN -- ## 
/*7.	Listar o nome de todas as empresas e o nome do contato dos representantes dessa empresa, 
  se não houver representantes cadastrados para a empresa*/
create view view_contato_empresa as
	select e.nome as empresa, cc.nome as contato
	from contatos_clientes as cc
    right join empresa e on e.id = cc.idEmpresa;
    
## -- VIEWS EXTRAS COM COMANDOS DQL -- ## 
/*8. Mostrar o id de todos os projetos e a data de início no formato dia/mês/ano
 iniciados entre 2020 e a data de hoje, cujo status esteja como em andamento*/
create view view_projeto_data as
select id, DATE_FORMAT(dataInicio, "%d/%m/%Y") as dataInicio
	from projetos 
	where dataInicio BETWEEN '2020=01-01' and now() and
    statusProjeto = 'Em andamento';
    
#9. Mostrar quantos projetos foram vendidos para empresa CIELO e na mesma consulta, mostrar quantos foram para empresa BANCO INTER
create view view_vendas_cielo_or_inter as    
select e.nome as empresa, count(v.id) as qtde
	from empresa e, contatos_clientes cc, vendas v 
    where e.id = cc.idEmpresa and
    cc.id = v.idContatoCliente and
    (e.nome = 'CIELO' or e.nome = 'BANCO INTER')
    group by e.nome;
    
#10. Mostrar os nomes dos materiais que contenham a palavra "Mesa", os preços e ordenando de maneira crescente pelo preço
create view view_mesa as
    select nome, precoUnitario
	from materiais m
    where m.nome like '%Mesa%'
    order by precoUnitario;

#11. Mostrar que tem o maior salário, seu salário e se o salário é superior a R$10.000,00
create view view_maior_salario as
select nome, salario as maiorSalario, if(salario>10000,'SIM', 'NÂO') as maiorQue10Mil
	from funcionarios
    where salario = (select max(salario) from funcionarios);
    
#12. Mostrar que tem o menor salário e seu salário
create view view_menor_salario as
select nome, salario as menorSalario
	from funcionarios
    where salario = (select min(salario) from funcionarios);

#13. Para cada pessoa, mostrar se o salário é menor que R$3.000, maior que R$3.000 ou maior que R$5.000
create view view_faixa_salarial as
select nome,
case 
	when salario > 5000 then "Maior que R$5mil"
    when salario >= 3000 then "Maior que R$3mil"
    else "Menor que R$3mil"
end as faixaSalarial
from funcionarios;

#14. Listar o nome de todas as pessoas que atuam em 2 ou mais projetos
create view view_2_projects as
select nome, count(ep.idProjeto) as qtdeProjetos
from funcionarios f, equipe_projeto ep
where f.id = ep.idFuncionario
group by f.nome
having count(ep.idProjeto)>1
## -- REMOVENDO DADOS DAS TABELAS -- ##

#1. Deletando projetos. As vendas são deletadas junto com os projetos
call deletarProjeto(14);

#2. Deletando equipe_projeto
delete from equipe_projeto where idProjeto = 10;
delete from equipe_projeto where idFuncionario = 2;

#3. Deletando materiais_projeto
delete from materiais_projeto where idProjeto = 7;
delete from materiais_projeto where idMaterial = 8;

#4. Deletando contatos
call deletarContatoCliente(7);
call deletarContatoCliente(17);

#5. Deletando materiais
call deletarMateriais(2);
call deletarMateriais(1);

#6. Deletando empresas
call deletarEmpresas(1);
INSERT INTO empresa(nome, cnpj) values ('VALE', '33592510000154');
call deletarEmpresas(11);

#7. Deletando funcionários
call deletarFuncionarios(9);
call deletarFuncionarios(1);
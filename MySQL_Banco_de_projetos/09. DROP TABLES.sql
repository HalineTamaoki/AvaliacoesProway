## -- DROP TABLES -- ##
drop table materiais_projeto;
drop table equipe_projeto;
drop table projetos;
drop table materiais;
drop table funcionarios;
drop table vendas;
drop table contatos_clientes;
drop table empresa;

## -- DROP PROCEDURES -- ##
drop procedure cadastrarVenda;
drop procedure cadastrarMateriaisProjeto;
drop procedure cadastrarEquipeProjeto;
drop procedure iniciarProjeto;
drop procedure finalizarProjeto;
drop procedure alterarMateriaisProjeto;
drop procedure alterarEquipeProjeto;
drop procedure deletarProjeto;
drop procedure deletarContatoCliente;
drop procedure deletarMateriais;
drop procedure deletarEmpresas;
drop procedure deletarFuncionarios;

## -- DROP TRIGGERS -- ##
drop trigger trg_criarProjetoAoVender;
drop trigger trg_delete_venda;

## -- DROP VIEWS -- ##
drop view view_salarios_equipes;
drop view view_projetos_pos_2020;
drop view view_vendas_inter;
drop view view_materiais_projeto;
drop view view_dados_projetos;
drop view view_projetos_por_funcionarios;
drop view view_contato_empresa;
drop view view_projeto_data;
drop view view_faixa_salarial;
drop view view_mesa;
drop view view_2_projects;
drop view view_maior_salario;
drop view view_menor_salario;
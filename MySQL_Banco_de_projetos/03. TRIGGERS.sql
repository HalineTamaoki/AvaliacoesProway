## -- CRIAR TRIGGERS -- ##
DELIMITER $$
create trigger trg_criarProjetoAoVender after insert on vendas
for each row
begin
	insert into projetos(statusProjeto, idVenda) values
    ('Não iniciado', new.id);
end $$;
DELIMITER ;


DELIMITER $$
create trigger trg_delete_venda after delete on projetos
for each row
begin
	delete from vendas where id = old.idVenda;
end $$;
DELIMITER ;
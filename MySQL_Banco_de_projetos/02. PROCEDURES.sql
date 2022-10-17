## -- PROCEDURES -- ##

DELIMITER $$
create procedure cadastrarVenda(IN dataVenda datetime, IN preco float, IN idContato int)
begin
	declare msg varchar (70);
    
	if (select count(*) from contatos_clientes where id = idContato) > 0 then 
		insert into vendas(dataVenda, preco, idContatoCliente) values
		(dataVenda, preco, idContato);
        set @msg = 'Cadastro feito com sucesso';
	else
		set @msg = 'Não foi possível cadastrar pois esse contato não existe';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure cadastrarMateriaisProjeto(IN idMat int,IN idProj int, IN quantidade int)
begin
	declare msg varchar (80);
    
    if (select count(*) from materiais_projeto where idMaterial=idMat and idProjeto=idProj)=0 then
		if (select count(*) from materiais where id = idMat) > 0 then 
			if (select count(*) from projetos where id = idProj) > 0 then
				insert into materiais_projeto(idMaterial, idProjeto, quantidade) values
				(idMat, idProj, quantidade);
				set @msg = 'Cadastro feito com sucesso'; 
			else
				set @msg = 'Não foi possível cadastrar pois esse projeto não existe';
			end if;
		else
			set @msg = 'Não foi possível cadastrar pois esse material não existe';
		end if;
    else 
		set @msg = 'Esse material já está sendo usado nesse projeto. Faça uma alteração';
    end if;
    
	select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure cadastrarEquipeProjeto(IN idFunc int, IN idProj int, IN horasDedicadas float, IN funcao varchar(25))
begin
	declare msg varchar (80);

	if (select count(*) from equipe_projeto where idFuncionario=idFunc and idProjeto=idProj)=0 then
		if (select count(*) from funcionarios where id = idFunc) > 0 then 
			if (select count(*) from projetos where id = idProj) > 0 then
				insert into equipe_projeto(idFuncionario, idProjeto, horasDedicadasDiaria, funcao) values
				(idFunc, idProj, horasDedicadas, funcao);
				set @msg = 'Cadastro feito com sucesso';
			else
				set @msg = 'Não foi possível cadastrar pois esse projeto não existe';
			end if;
		else
			set @msg = 'Não foi possível cadastrar pois esse funcionário não existe';
		end if;
    else
		set @msg = 'Esse funcionário já está alocado nesse projeto. Faça uma alteração';
    end if;
    
	select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure iniciarProjeto(IN idProj int, IN inicio datetime, IN terminoEstimado datetime)
begin
	declare msg varchar (70);
    
	if (select count(*) from projetos where id = idProj) > 0 then 
		update projetos set dataInicio = inicio, dataTerminoEstimado = terminoEstimado, 
			statusProjeto = 'Em andamento' where id = idProj;
        set @msg = 'Projeto iniciado';
	else
		set @msg = 'Esse projeto não existe';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure finalizarProjeto(IN idProj int, IN termino datetime)
begin
	declare msg varchar (70);
    
	if (select count(*) from projetos where id = idProj) > 0 then 
		update projetos set dataTerminoReal = termino, statusProjeto = 'Finalizado' where id = idProj;
        set @msg = 'Projeto marcado como finalizado';
        
	else
		set @msg = 'Esse projeto não existe';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure alterarMateriaisProjeto(IN idMat int,IN idProj int, IN quant int)
begin
	declare msg varchar (70);
    
	if (select count(*) from materiais_projeto where idProjeto = idProj and idMaterial=idMat) > 0 then 
			update materiais_projeto set 
                quantidade = quant
			where idProjeto = idProj and idMaterial = idMat;
			set @msg = 'Material alterado';
	else
		set @msg = 'Não existe nenhum item para esse projeto e material';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure alterarEquipeProjeto(IN idFunc int,IN idProj int, IN horasDedicadas float, IN funcao varchar(25))
begin
	declare msg varchar (70);
    
	if (select count(*) from equipe_projeto where idProjeto = idProj and idFuncionario=idFunc) > 0 then 
			update equipe_projeto set 
                horasDedicadasDiaria = horasDedicadas,
                funcao = funcao
			where idProjeto = idProj and idFuncionario = idFunc;
			set @msg = 'Equipe alterada';
	else
		set @msg = 'Não existe nenhum item para esse projeto e funcionário';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure deletarProjeto(IN idProj int)
begin
	declare msg varchar (70);
    
	if (select count(*) from equipe_projeto where idProjeto = idProj) = 0 then 
		if (select count(*) from materiais_projeto where idProjeto = idProj) = 0 then
			delete from projetos where id = idProj;
			set @msg = 'Projeto deletado';
		else 
			set @msg = 'Não é possível deletar pois existem materiais atreladas a esse projeto';
		end if;
	else
		set @msg = 'Não é possível deletar pois existem equipes atreladas a esse projeto';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure deletarContatoCliente(IN idCliente int)
begin
	declare msg varchar (70);
    
	if (select count(*) from vendas where idContatoCliente = idCliente) = 0 then 
		delete from projetos where id = idCliente;
		set @msg = 'Contato deletado';
	else
		set @msg = 'Não é possível deletar pois existem vendas atreladas a essa pessoa';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure deletarMateriais(IN idMat int)
begin
	declare msg varchar (70);
    
	if (select count(*) from materiais_projeto where idMaterial = idMat) = 0 then 
		delete from materiais where id = idMat;
		set @msg = 'Material deletado';
	else
		set @msg = 'Não é possível deletar pois existem projetos atrelados a esse material';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure deletarEmpresas(IN idEmp int)
begin
	declare msg varchar (70);

	if (select count(*) from contatos_clientes where idEmpresa = idEmp) = 0 then 
		delete from empresa where id = idEmp;
		set @msg = 'Empresa deletada';
	else
		set @msg = 'Não é possível deletar pois existem clientes atrelados a essa empresa';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;

DELIMITER $$
create procedure deletarFuncionarios(IN idFunc int)
begin
	declare msg varchar (70);
    
	if (select count(*) from equipe_projeto where idFuncionario = idFunc) = 0 then 
		delete from funcionarios where id = idFunc;
		set @msg = 'Funcionário deletado';
	else
		set @msg = 'Não é possível deletar pois existem equipes atreladas a esse funcionário';
    end if;
    
    select @msg as mensagem;
end $$;
DELIMITER ;
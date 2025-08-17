package com.lucas.henrique.org.funcionarios_crud.service;

import com.lucas.henrique.org.funcionarios_crud.Entity.Funcionario;
import com.lucas.henrique.org.funcionarios_crud.Exception.FuncionarioNaoEncontradoException;
import com.lucas.henrique.org.funcionarios_crud.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public Funcionario salvarFuncionario(Funcionario funcionario){
       return funcionarioRepository.save(funcionario);
    }

    public Funcionario buscarPorId(Long id){
        return funcionarioRepository.findById(id).orElseThrow(()-> new FuncionarioNaoEncontradoException("Funcionario de "+id+ " não encontrado"));
    }

    public Page<Funcionario> buscarTodos(Pageable pageable){
        return funcionarioRepository.findAll(pageable);
    }

    public void excluirPorId(Long id){
        funcionarioRepository.deleteById(id);
    }

    public Funcionario atualizarDados(Long id, Funcionario funcionario){
        Funcionario funcionarioEncontrado = funcionarioRepository.findById(id).orElseThrow(
                ()-> new FuncionarioNaoEncontradoException("Funcionario de "+funcionario.getId()+ " não encontrado"));

        funcionarioEncontrado.setNome(funcionario.getNome());
        funcionarioEncontrado.setContato_numero(funcionario.getContato_numero());
        funcionarioEncontrado.setEndereco(funcionario.getEndereco());
        funcionarioEncontrado.setGenero(funcionario.getGenero());
        funcionarioEncontrado.setDepartamento(funcionario.getDepartamento());
        funcionarioEncontrado.setSkills(funcionario.getSkills());

        return funcionarioRepository.save(funcionarioEncontrado);
    }
}

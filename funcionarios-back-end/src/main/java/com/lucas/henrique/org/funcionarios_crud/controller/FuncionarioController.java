package com.lucas.henrique.org.funcionarios_crud.controller;

import com.lucas.henrique.org.funcionarios_crud.Entity.Funcionario;
import com.lucas.henrique.org.funcionarios_crud.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/funcionario")
public class FuncionarioController {

    @Autowired
    FuncionarioService funcionarioService;

    @PostMapping("/salvar")
    public ResponseEntity<Funcionario> salvarFuncionario(@RequestBody Funcionario funcionario){
        return ResponseEntity.ok(funcionarioService.salvarFuncionario(funcionario));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Funcionario> buscarPorId(@PathVariable Long id){
        return ResponseEntity.ok(funcionarioService.buscarPorId(id));
    }

    @GetMapping
    public ResponseEntity<Page<Funcionario>>  buscarTodos(Pageable pageable){
        return ResponseEntity.ok(funcionarioService.buscarTodos(pageable));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirPorId(@PathVariable Long id){
        funcionarioService.excluirPorId(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Funcionario> atualizar(@PathVariable long id,  @RequestBody Funcionario funcionario){
       return ResponseEntity.ok(funcionarioService.atualizarDados(id, funcionario));
    }
}

import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import "fontsource-roboto";
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import { validarCPF, validarSenha } from "./models/cadastro";


class App extends Component {
  render() {
    return (
      // o fragment não e renderizado no app.js
      // conteiner no material ui, cria um container para os elementos os sentralizando apartir das suas propriedades de maxwidth
      // pode ser fluido, fixo e consumo de api
      // Typography altera o tipo da fonte passando a variante para o estado de h1 ou outras, align entre outros
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;

import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

// quando trabalhamos com funções que retornão uma propriedade elas são stateless -> não guardam estado

function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    });

    // criando um array com a regra de negocio para renderização das etapas de cadastro
    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados })
        proximo();
    }

    // proximo chama a proxima etapa que sera renderizado para o usuario
    function proximo(dados) {
        setEtapaAtual(etapaAtual + 1);
    }

    // return ira renderizar a etapa atual do array
    // Stepeer cria um grafico ao topo indicando em qual etapa do cadastro o usuario esta
    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>Login</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
}


export default FormularioCadastro;
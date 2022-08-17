import React from "react";
import Botao from "../Botao";
import Input from "../Input";
import Label from "../Label";

import "./style.scss";

class Formulario extends React.Component {
    render(){
        return (
            <form>
                <div className="inputContainer">
                    <Label
                        titulo = "Atividade"
                        lblfor = "tarefa"
                    />
                    <Input
                        identificador = "tarefa"
                        nome = "tarefa"
                        tipo = "text"
                        placeholder = "Informe o nome da tarefa/estudo"
                        obrigatorio = {true}
                    />
                </div>
                <div className="inputContainer">
                    <Label
                        titulo = "Tempo"
                        lblfor = "tempo"
                    />
                    <Input
                        identificador = "tempo"
                        nome = "tempo"
                        step = "1"
                        tipo = "time"
                        obrigatorio = {true}
                        minimo = "00:00:00"
                        maximo = "01:30:00"
                    />
                </div>

                <div>

                    <Input                    
                        identificador = "salvar"
                        nome = "salvar"
                        tipo = "submit"
                        valor = "Adicionar tarefa"
                        obrigatorio = {false}
                        classe = "botao"
                    />

                    <Input                    
                        identificador = "limpar"
                        nome = "limpar"
                        tipo = "reset"
                        valor = "Limpar"
                        obrigatorio = {false}
                        classe = "btn_limpar"
                    />

                </div>

            </form>
        )
    }
}

export default Formulario;
import React from "react";
import {v4 as idV4} from "uuid";

import Iitem from "../../Interfaces/Iitem";
import Input from "../Input";
import Label from "../Label";

import "./style.scss";

class Formulario extends React.Component<{
    callback: React.Dispatch<React.SetStateAction<Iitem[]>>
}> {

    state = {
        nome: "",
        tempo: "00:00:10"
    };

    define_item = (itn: any) => {
        this.setState({
            ...this.state,
            nome: itn
        })
    }

    adicionar_item(evento: React.FormEvent){
        evento.preventDefault();
        this.props.callback(itensaAntigos => 
            [
                ...itensaAntigos, 
                {
                    ...this.state,
                    selecionado: false,
                    completo: false,
                    id: idV4()
                },
                {
                    id: idV4(),
                    nome: "Pausa",
                    tempo: "00:00:05",
                    selecionado: false,
                    completo: false
                }
            ]
        );

        this.setState({
            nome: "",
            tempo: "00:01:10"
        });
    }

    render(){
        return (
            <form className="formulario" onSubmit={this.adicionar_item.bind(this)}>

                <div className="inputContainer">

                    <Label
                        titulo = "Atividade"
                        lblfor = "item"
                    />
                    <Input
                        tipo = "text"
                        valor={this.state.nome}
                        placeholder = "Informe o nome da tarefa/estudo"
                        obrigatorio = {true}
                        classe="input_form"
                        callback={this.define_item}
                    />

                </div>

                <div>

                    <Input
                        tipo = "submit"
                        valor = "Adicionar tarefa"
                        obrigatorio = {false}
                        classe = "btn_add"
                    />

                </div>

            </form>
        )
    }
}

export default Formulario;
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
        tempo: "00:00"
    };

    altera_tempo = (tmp: any) => {
        this.setState({
            ...this.state,
            tempo: tmp
        })
    }

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
                }
            ]
        );

        this.setState({
            nome: "",
            tempo: "00:00"
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
                        identificador = "item"
                        nome = "item"
                        tipo = "text"
                        valor={this.state.nome}
                        placeholder = "Informe o nome da tarefa/estudo"
                        obrigatorio = {true}
                        classe="input_form"
                        callback={this.define_item}
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
                        valor = {this.state.tempo}
                        //minimo = "00:25:00"
                        minimo = "00:00:01"
                        maximo = "00:30:00"
                        classe="input_form"
                        callback={this.altera_tempo}
                    />
                    
                </div>

                <div>

                    <Input                    
                        identificador = "salvar"
                        nome = "salvar"
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
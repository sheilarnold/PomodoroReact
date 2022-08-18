import React from "react";

class Input extends React.Component<
    {
        identificador:string, 
        tipo:string, 
        nome: string, 
        obrigatorio: boolean,
        placeholder?: string,
        valor?:string,
        step?:string,
        minimo?: string,
        maximo?: string,
        classe?: string,
        callback?: Function,
        callback_onClick?: () => void
    }
> {
    
    render(){
        return (
            <input
                id = {this.props.identificador}
                name = {this.props.nome}
                type={this.props.tipo}
                placeholder = {this.props.placeholder}
                required = {this.props.obrigatorio}
                value = {this.props.valor}
                step = {this.props.step}
                min={this.props.minimo}
                max={this.props.maximo}
                className={this.props.classe}
                onChange={(valor) => this.props.callback?this.props.callback(valor.target.value):null}
                onClick={this.props.callback_onClick}
            />
        )
    }

}

export default Input;

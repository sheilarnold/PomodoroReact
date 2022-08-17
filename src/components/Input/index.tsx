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
        classe?: string
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
            />
        )
    }

}

export default Input;

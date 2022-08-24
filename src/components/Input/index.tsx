import React from "react";

class Input extends React.Component<
    {
        tipo:string,
        obrigatorio: boolean,
        placeholder?: string,
        valor?:string,
        classe?: string,
        callback?: Function,
        callback_onClick?: () => void
    }
> {
    
    render(){
        return (
            <input
                type={this.props.tipo}
                placeholder = {this.props.placeholder}
                required = {this.props.obrigatorio}
                value = {this.props.valor}
                className={this.props.classe}
                onChange={(valor) => this.props.callback?this.props.callback(valor.target.value):null}
                onClick={this.props.callback_onClick}
            />
        )
    }

}

export default Input;

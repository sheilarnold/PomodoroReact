import React from "react";

class Botao extends React.Component<{tipo: string, titulo:string}> {
    render() {
        return(
            <button>
                {this.props.titulo}
            </button>
        )
    }
}

export default Botao;
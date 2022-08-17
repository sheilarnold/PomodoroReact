import React from "react";

class Label extends React.Component<{titulo:string, lblfor:string}> {

    render(){
        return(
            <label
                htmlFor={this.props.lblfor}
            >
                {this.props.titulo}
            </label>
        )
    }

}

export default Label;
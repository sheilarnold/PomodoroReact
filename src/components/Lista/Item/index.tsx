import React from "react";

import "./style.scss";

function Item (props:any) {

    function create_item(){

    }

    return(
        <li id={props.id}>
            <h3>{props.nome}:</h3>
            <span>{props.tempo}</span>
        </li>
    )

}

export default Item;
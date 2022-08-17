import React from "react";
import Item from "./Item";

import "./style.scss";

function Lista (props:any) {

    function create_item(){

    }

    return(
        <aside>
           
            <h2>
                {props.titulo}
            </h2>

            <ul>

                <Item
                    id = "item1"
                    nome = "React"
                    tempo = "00:30:00"
                />

            </ul>

        </aside>
    )

}

export default Lista;
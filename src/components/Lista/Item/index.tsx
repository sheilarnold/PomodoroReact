import PropsItem from "../../../Interfaces/PropsItem";
import "./style.scss";

function Item ({id, nome, tempo, selecionado, completo, selecionaTarefa,}: PropsItem) {

    return(
        <li
            className={selecionado?"itemSelecionado":""}
            onClick={() => 
                selecionaTarefa({
                    id,
                    nome,
                    tempo,
                    selecionado,
                    completo
                })
            }
        >
            <h3>{nome}:</h3>
            <span>{tempo}</span>
        </li>
    )

}

export default Item;
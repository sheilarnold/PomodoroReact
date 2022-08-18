import PropsItem from "../../../Interfaces/PropsItem";
import "./style.scss";

function Item ({id, nome, tempo, selecionado, completo, selecionaTarefa,}: PropsItem) {

    return(
        <li
            className={selecionado ? "itemSelecionado" : "" || completo ? "itemCompletado" : ""}
            onClick={() => 
                !completo && 
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
            {completo && <span className="concluido" aria-label="itemCompletado"></span>}
        </li>
    )

}

export default Item;
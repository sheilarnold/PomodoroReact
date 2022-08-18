import Props from "../../Interfaces/Props";
import Item from "./Item";

import "./style.scss";

function Lista ({itens, selecionaTarefa}: Props) {

    //const [itens, setItens] = useState(props.itens);

    return(
        <aside>
           
            <h2>
                Minhas tarefas/atividades
            </h2>

            <ul>

                {
                    itens.map((item) => (                        
                        <Item
                            selecionaTarefa={selecionaTarefa}
                            key = {item.id}
                            {...item}
                        />
                    ))
                }

            </ul>

        </aside>
    )

}

export default Lista;
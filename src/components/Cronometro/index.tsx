import { useEffect, useState } from "react";
import Iitem from "../../Interfaces/Iitem";
import TempoParaSegundos from "../../utils/Time";
import Input from "../Input";
import Relogio from "./Relogio";

import "./style.scss";

interface Props {
    item: Iitem | undefined,
    callback: () => void
}

function Cronometro({item, callback} : Props){

    const [tempo, setTempo] = useState<number>();

    function iniciar_cronometro(tmp: number = 0) {
        setTimeout(() => {
            if(tmp > 0){
                setTempo(tmp - 1);
                return iniciar_cronometro(tmp - 1);
            }else{
                callback();
            }
        }, 1000)
    }

    useEffect(() => {
        setTempo(TempoParaSegundos(item?.tempo??"00:00:00"));
    }, [item?.tempo])

    return(
        <div className="cronometro">

            <p className="titulo">
                Escolha um objetivo e inicie o cronômetro
            </p>

            
            <div className="relogioWrapper">
                <Relogio
                    tempo = {tempo}
                />
            </div>
            
            <Input
                tipo="button"
                valor="Começar"
                obrigatorio={false}
                classe="btn_comecar"
                callback_onClick={() => iniciar_cronometro(tempo)}
            />

        </div>
    )
}

export default Cronometro;
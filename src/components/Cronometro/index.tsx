import { useEffect, useState } from "react";
import Iitem from "../../Interfaces/Iitem";
import TempoParaSegundos from "../../utils/Time";
import Input from "../Input";
import Relogio from "./Relogio";

import "./style.scss";

interface Props {
    item: Iitem | undefined
}

function Cronometro({item} : Props){

    const [tempo, setTempo] = useState<Number>();

    useEffect(() => {
        setTempo(TempoParaSegundos(item?.tempo??"00:00:00"));
    }, [item?.tempo])

    return(
        <div className="cronometro">

        <div>
            
            Tempo: {tempo?.toString()}
            
        </div>
            
            <p className="titulo">
                Escolha um objetivo e inicie o cronômetro
            </p>

            
            <div className="relogioWrapper">
                <Relogio />
            </div>
            
            <Input
                identificador="init_cronometro"
                tipo="button"
                nome="init_cronometro"
                valor="Começar"
                obrigatorio={false}
                classe="btn_comecar"
            />

        </div>
    )
}

export default Cronometro;
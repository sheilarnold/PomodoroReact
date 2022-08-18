import Input from "../Input";
import Relogio from "./Relogio";

import "./style.scss";

function Cronometro(props:any){
    return(
        <div className="cronometro">
            
            <p className="titulo">Escolha uma {props.titulo} e inicie o cronômetro</p>
            
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
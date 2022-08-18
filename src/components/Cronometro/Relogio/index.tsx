import "./style.scss";

interface Props {
    tempo: number|undefined
}

function Relogio({tempo = 0}: Props){

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    const [mnDezena, mnUnidade] = String(minutos).padStart(2, "0");
    const [sgDezena, sgUnidade] = String(segundos).padStart(2, "0");

    return(
        <>
            <span className="relogioNumero">{mnDezena}</span>
            <span className="relogioNumero">{mnUnidade}</span>
            <span className="relogioDivisao">:</span>
            <span className="relogioNumero">{sgDezena}</span>
            <span className="relogioNumero">{sgUnidade}</span>
        </>
    )
}

export default Relogio;
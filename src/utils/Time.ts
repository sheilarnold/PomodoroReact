export default function TempoParaSegundos(tempo: string){
    //let minutos = tempo.split(":")[1];
    //let segundos = tempo.split(":")[2];

    let [horas = "0", minutos = "0", segundos = "0"]= tempo.split(":");

    /*
        const horasEmSegundos = Number(horas)*3600;
        const minutosEmSegundos = Number(minutos)*60;
    */

    //console.log("valor recebido: ", tempo);

    //console.log("Valor retornado: ", ((Number(horas) * 3600) + (Number(minutos) * 60) + (Number(segundos))));

    return ((Number(horas) * 3600) + (Number(minutos) * 60) + (Number(segundos)));

}
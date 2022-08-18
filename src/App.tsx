import { useState } from "react";
import Cronometro from "./components/Cronometro";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Iitem from "./Interfaces/Iitem";

import "./style.scss";

function App() {

  //const [itens, setItens] = useState([{nome: "teste", tempo: "00:00"}]);
  const [itens, setItens] = useState<Iitem[]>([]);

  const [selecionado, setSelecionado] = useState<Iitem>();
  const [completo, setCompleto] = useState<Iitem>();

  function selectItem(itemSelecionado: Iitem){
    console.log(itemSelecionado);
    setSelecionado(itemSelecionado);
    setItens(itensAnteriores => itensAnteriores.map(
        item => ({
            ...item,
            selecionado: item.id === itemSelecionado.id ? true : false
          }
        )
      )
    )
  }

  function defineItemCompleto(itemCompleto: Iitem){
    setCompleto(itemCompleto);
  }

  return (
    <div className="AppStyle">

      <Formulario
        callback={setItens}
      />

      <Lista
        itens = {itens}
        selecionaTarefa={selectItem}
      />
        
      <Cronometro
        titulo = "tarefa/atividade"
      />

    </div>
  );
  
}

export default App;


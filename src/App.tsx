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
  
  function selectItem(itemSelecionado: Iitem){
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

  function defineItemCompleto(){
    if(selecionado){

      setItens(itensAnteriores => itensAnteriores.map(item => {
            if(item.id === selecionado.id){
              return{
                ...item,
                selecionado : false,
                completo: true
              }
            }else{
              return item;
            }        
          }
        )
      )
    }
    
  }

  return (
    <div className="AppStyle">

      <Formulario
        callback={setItens}
      />

      <Lista
        itens={itens}
        selecionaTarefa={selectItem}
      />
        
      <Cronometro
        item={selecionado}
        callback={defineItemCompleto}
      />

    </div>
  );
  
}

export default App;


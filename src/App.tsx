import React from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {

  return (
    <div className="AppStyle">

        <div>
          <Formulario/>
        </div>

        <div>
          <Lista
            titulo = "Minhas tarefas/atividades"
          />
        </div>

    </div>
  );
  
}

export default App;


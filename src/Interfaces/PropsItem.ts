import Iitem from "./Iitem";

export default interface PropsItem extends Iitem {
    selecionaTarefa: (tarefaSelecionada: Iitem) => void
}
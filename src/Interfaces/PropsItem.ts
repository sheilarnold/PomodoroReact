import Iitem from "./Iitem";

export default interface Props extends Iitem {
    selecionaTarefa: (tarefaSelecionada: Iitem) => void
}
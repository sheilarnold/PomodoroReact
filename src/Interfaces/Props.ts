import Iitem from "./Iitem";

export default interface Props {
    itens: Iitem[],
    selecionaTarefa: (itenSelecionado: Iitem) => void
}
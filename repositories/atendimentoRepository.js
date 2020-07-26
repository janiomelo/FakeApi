import myCache from '../myCache';
import {randomNumber} from '../helpers';

class Atendimento {
  inserirAtendimento(dados) {
    dados.numero = randomNumber();
    dados.situacao = {
      id: 10,
      descricao: "Aguardando atendimento"
    }
    myCache.addAtendimento(dados);
    return dados;
  }
  limpar() {
    myCache.limparAtendimentos();
  }
  listaAtendimentosPorPessoa(pessoa) {
    let atendimentos = myCache.getAtendimentos();
    if (! atendimentos) return [];
    return atendimentos.filter((x) => x.pessoa.id === parseInt(pessoa))
  }
}

export default Atendimento;

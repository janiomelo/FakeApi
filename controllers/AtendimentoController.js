import AtendimentosRepo from '../repositories/atendimentoRepository';

export default {
  novoAtendimento: (req, res) => {
    const at = new AtendimentosRepo();
    res.send(at.inserirAtendimento(req.body));
  },
  meusAtendimentos: (req, res) => {
    const at = new AtendimentosRepo();
    res.send(at.listaAtendimentosPorPessoa(req.query.pessoa));
  },
  limpaAtendimentos: (req, res) => {
    const at = new AtendimentosRepo();
    at.limpar();
    res.send({mensagem: "OK"})
  }
};

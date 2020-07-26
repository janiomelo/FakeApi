import AgendamentosRepo from '../repositories/agendamentoRepository';

export default {
  novosAgendamentos: (req, res) => {
    const ag = new AgendamentosRepo();
    res.send(ag.getAgendamentos());
  },
  confirmaAgendamentos: (req, res) => {
    const ag = new AgendamentosRepo();
    ag.limpaAgendamentosPorId(req.body);
    res.send();
  },
};

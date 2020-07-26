import myCache from "../myCache";
import PessoaFisicaRepo from "./pessoaFisica";
import agendamentoFactory from "../factories/agendamento";

class Agendamentos {
  geraAgendamentos() {
    const pessoaFisicaRepo = new PessoaFisicaRepo();
    let agendamentos = [];
    let i = 0;
    while (i < 10) {
      agendamentos.push(agendamentoFactory(pessoaFisicaRepo));
      i++;
    }
    myCache.setAgendamentos(agendamentos);
    return agendamentos;
  }
  getAgendamentos() {
    let agendamentos = myCache.getAgendamentos();
    if (!agendamentos || agendamentos.length === 0) {
      agendamentos = this.geraAgendamentos();
    }
    return agendamentos;
  }
  limpaAgendamentosPorId(listaIds) {
    let agendamentos = myCache.getAgendamentos();
    if (!agendamentos) return;
    listaIds.forEach((id) => {
      let key = agendamentos.findIndex((x) => x.id === id);
      if (key > -1) {
        agendamentos.splice(key, 1);
      }
    });
    myCache.setAgendamentos(agendamentos);
  }
}

export default Agendamentos;

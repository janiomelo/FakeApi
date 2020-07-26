import NodeCache from "node-cache";

var MyCache;

(function () {
  var nodeInstance;

  MyCache = function () {
    if (!nodeInstance) {
      nodeInstance = new NodeCache();
    }
    return {
      getAgendamentos: () => {
        return nodeInstance.get("agendamentosCache");
      },
      setAgendamentos: (agendamentos) => {
        return nodeInstance.set("agendamentosCache", agendamentos);
      },
      getAtendimentos: () => {
        return nodeInstance.get("atendimentosCache");
      },
      addAtendimento: (atendimento) => {
        let atendimentosAtuais = nodeInstance.get("atendimentosCache");
        if (!atendimentosAtuais) atendimentosAtuais = [];
        atendimentosAtuais.push(atendimento)
        return nodeInstance.set("atendimentosCache", atendimentosAtuais);
      },
      limparAtendimentos: () => {
        return nodeInstance.set("atendimentosCache", null);
      }
    };
  };
})();

export default new MyCache();

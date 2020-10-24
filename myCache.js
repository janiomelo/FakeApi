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
      },
      getResolvido: () => {
        return nodeInstance.get("resolvidosBot");
      },
      getNaoResolvido: () => {
        return nodeInstance.get("naoResolvidosBot");
      },
      addResolvido: () => {
        let resolvido = nodeInstance.get("resolvidosBot");
        if (!resolvido) resolvido = 1;
        else resolvido++
        nodeInstance.set("resolvidosBot", resolvido);
      },
      addNaoResolvido: () => {
        let naoResolvido = nodeInstance.get("naoResolvidosBot");
        if (!naoResolvido) naoResolvido = 1;
        else naoResolvido++
        nodeInstance.set("naoResolvidosBot", naoResolvido);
      }
    };
  };
})();

export default new MyCache();

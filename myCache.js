import NodeCache from "node-cache";

var MyCache;

(function(){
  var nodeInstance;

  MyCache = function() {
    if (! nodeInstance) {
      nodeInstance = new NodeCache();
    }
    return {
      getAgendamentos: () => {
        return nodeInstance.get('agendamentosCache')
      },
      setAgendamentos: (agendamentos) => {
        return nodeInstance.set('agendamentosCache', agendamentos)
      }
    }
  };
})();

export default new MyCache();
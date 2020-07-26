import MotivoRepo from "../repositories/motivoRepository";

export default {
  listaMotivos: (req, res) => {
    const motivoRepo = new MotivoRepo();
    res.send(motivoRepo.getListaDeMotivos(req.query.grupo));
  },
  listaGrupos: (req, res) => {
    const motivoRepo = new MotivoRepo();
    res.send(motivoRepo.getListaDeGrupos());
  },
  getMotivo: (req, res) => {
    const motivoRepo = new MotivoRepo();
    const motivo = motivoRepo.getMotivoById(req.params.id);
    if (! motivo) return res.status(204).send();
    res.send(motivo);
  }
};

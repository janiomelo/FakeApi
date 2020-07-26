import motivoFactory from '../factories/motivoFactory';

class Motivo {
  getListaDeMotivos(grupoId) {
    let motivos = motivoFactory()
    if (! grupoId) 
      return motivos
    return motivos.filter((x) => x.grupo.id === parseInt(grupoId))
  }
  getMotivoById(motivoId) {
    let motivos = motivoFactory()
    let motivo = motivos.filter((x) => x.id === parseInt(motivoId))
    return Array.isArray(motivo) ? motivo[0] : null
  }
  getListaDeGrupos() {
    let motivos = motivoFactory();
    let grupos = [];
    motivos.forEach(m => {
      if (grupos.findIndex((x) => x.id === m.grupo.id) === -1) {
        grupos.push(m.grupo)
      }
    });
    return grupos
  }
}

export default Motivo;
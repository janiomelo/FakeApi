export default {
  iniciaAtendimento: (req, res) => {
    if (!("pessoa" in req.body))
      res.status(422).send({ detalhes: "campo 'pessoa' não informado" });
    if (!("usuario" in req.body))
      res.status(422).send({ detalhes: "campo 'usuario' não informado" });
    if (req.body.pessoa === 99999)
      res.status(404).send({ detalhes: "pessoa não encontrado" });
    if (req.body.dependente === 99999)
      res.status(404).send({ detalhes: "dependente não encontrado" });
    if (req.body.homologacao === 99999)
      res.status(404).send({ detalhes: "homologacao não encontrada" });
    if (req.body.usuario === 99999)
      res.status(404).send({ detalhes: "usuário não encontrado" });

    res.status(201).send();
  },
  encerraAtendimento: (req, res) => {
    if (!("usuario" in req.body))
      res.status(422).send({ detalhes: "campo 'usuario' não informado" });
    if (req.body.usuario === 99999)
      res.status(404).send({ detalhes: "usuário não encontrado" });
    res.status(200).send();
  },
};

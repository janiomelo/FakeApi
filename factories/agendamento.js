import { DateTime, trueOrFalse } from "../helpers";

export default (pessoaFisicaRepo) => {
  let start = new Date();
  let end = new Date(2021, 12, 31);
  return {
    id: `HOD-${parseInt(Math.random() * 1000, 10)}`,
    pessoa: pessoaFisicaRepo.randomPefi(),
    unidade: 1,
    servico: trueOrFalse() ? 5 : 6,
    data: new DateTime(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toJSON(),
  };
};

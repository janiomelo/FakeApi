function isValidDate(dateString) {
  // First check for the pattern
  if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(dateString))
    return false;

  // Parse the date parts to integers
  var parts = dateString.split("-");
  var day = parseInt(parts[2], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[0], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12)
    return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
};

export default {
  atualiza: (req, res) => {
    if (parseInt(req.params.id) === 999 )
      return res.status(404).send({ detalhes: `pessoa com id 999 não existe` });


    let obrigatórios = ["nome", "sexo", "dataNascimento"]
    let tamanhos = [
      { campo: "nome", tamanho: 100 },
      { campo: "sexo", tamanho: 1 },
      { campo: "cpf", tamanho: 11 },
      { campo: "telefone", tamanho: 30 },
      { campo: "nomeMae", tamanho: 60 },
      { campo: "celular", tamanho: 9 },
      { campo: "celularDdd", tamanho: 2 },
      { campo: "nacionalidade", tamanho: 30 },
      { campo: "email", tamanho: 80 },
      { campo: "rg", tamanho: 13 },
      { campo: "ctps", tamanho: 8 },
      { campo: "ctpsSerie", tamanho: 8 },
      { campo: "pis", tamanho: 14 },
      { campo: "cep", tamanho: 9 },
      { campo: "logradouroTipo", tamanho: 5 },
      { campo: "logradouro", tamanho: 60 },
      { campo: "logradouroNumero", tamanho: 7 },
      { campo: "complemento", tamanho: 60 },
      { campo: "estado", tamanho: 2 },
      { campo: "cidade", tamanho: 30 },
      { campo: "bairro", tamanho: 40 },
    ]
    let check = [{ campo: "sexo", check: ["M", "F"] }]
    let inteiros = []
    let sonumeros = ["cpf"]
    let datas = ["dataNascimento"]

    for (let i = 0; i < obrigatórios.length; i++) {
      const campo = obrigatórios[i];
      if (!(campo in req.body))
        return res.status(422).send({ detalhes: `campo ${campo} não informado` });
    }

    for (let i = 0; i < sonumeros.length; i++) {
      const campo = sonumeros[i];
      if (campo in req.body && !/^[0-9]+$/.test(req.body[campo]))
        return res.status(422).send({ detalhes: `campo ${campo} deve ter apenas números` });
    }

    for (let i = 0; i < tamanhos.length; i++) {
      const def = tamanhos[i];
      if (def.campo in req.body && req.body[def.campo].length > def.tamanho)
        return res.status(422).send({ detalhes: `campo ${def.campo} precisa ter até ${def.tamanho} carácteres` });
    }

    for (let i = 0; i < check.length; i++) {
      const def = check[i];
      if (def.campo in req.body && !def.check.includes(req.body[def.campo]))
        return res.status(422).send({ detalhes: `campo ${def.campo} precisa ter ser ${def.check.join(',')}` });
    }

    for (let i = 0; i < inteiros.length; i++) {
      const campo = inteiros[i];
      if (campo in req.body && !Number.isInteger(req.body[campo]))
        return res.status(422).send({ detalhes: `campo ${campo} precisa ser um inteiro válido` });
    }

    for (let i = 0; i < datas.length; i++) {
      const campo = datas[i];
      if (campo in req.body &&  !isValidDate(req.body[campo])) {
        return res.status(422).send({ detalhes: `campo ${campo} precisa ser uma data válida` });
      }
    }


    res.status(200).send();
  }
};

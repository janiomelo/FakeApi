const express = require("express");
const app = express();
app.use(express.json());
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const trueOrFalse = () => {
  return Math.floor((Math.random() * 10) + 1) % 2 == 0
}

const randomPefi = () => {
  const pefis = [
    1,
    87,
    88,
    89,
    90,
    91,
    92,
    94,
    95,
    96,
    98,
    99,
    100,
    2670,
    3006,
    3060,
    3061,
    3063,
    3112,
    17857,
    28832,
    35425,
    35432,
    35433,
    35435,
    35438,
    35446,
    35448,
    35449,
    35451,
    35453,
    35454,
    35457,
    35460,
    35463,
    35465,
    35466,
    35480,
    35483,
    35486,
    35490,
    35491,
    35492,
    35493,
    35494,
    35496,
    35497,
    35498,
    35499,
    35501,
    35502,
    35503,
    35506,
    35507,
    35508,
    35515,
    35517,
    35520,
    35522,
    35523,
    35524,
    35526,
    35527,
    35528,
    35529,
    35530,
    35531,
    35543,
    35544,
    35545,
    35548,
    35551,
    35553,
    35555,
    35557,
    35560,
    35561,
    35563,
    35564,
    35566,
    35571,
    35573,
    35601,
    35602,
    35612,
    35614,
    35623,
    35624,
    35625,
    35628,
    35634,
    35635,
    35636,
    35638,
    35639,
    35643,
    35648,
    35650,
    35651,
    35652
  ]
  return pefis[Math.floor(Math.random() * 99) + 0];
}

class DateTime extends Date {
  toJSON() {
    return {
      date: super.toJSON().toString().replace("T", " ").replace("Z", ""),
      timezone_type: 3,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  }
}

class Agendamentos{
  geraAgendamentos() {
    let agendamentos = [];
    let i = 0
    while (i < 10) {
      agendamentos.push({
        id: `HOD-${parseInt((Math.random() * 1000), 10)}`,
        pessoa: randomPefi(),
        unidade: 1,
        servico: trueOrFalse() ? 5 : 6,
        data: new DateTime(
          start.getTime() + Math.random() * (end.getTime() - start.getTime())
        ).toJSON(),
      });
      i++;
    }
    myCache.set('agendamentosCache', agendamentos);
    return agendamentos
  }
  getAgendamentos() {
    let agendamentos = myCache.get('agendamentosCache');
    if (! agendamentos || agendamentos.length === 0) {
      agendamentos = this.geraAgendamentos();
    }
    return agendamentos;
  }
  limpaAgendamentosPorId(listaIds) {
    let agendamentos = myCache.get('agendamentosCache');
    if (! agendamentos) return;
    listaIds.forEach(id => {
      let key = agendamentos.findIndex(x => x.id === id);
      if (key > -1) {
        agendamentos.splice(key, 1);
      }
    })
    myCache.set('agendamentosCache', agendamentos);
  }
}

let start = new Date();
let end = new Date(2021, 12, 31);


const ag = new Agendamentos();
app.get("/novos-agendamentos", function (req, res) {
  res.send(ag.getAgendamentos());
});

app.post("/confirmar-agendamentos", function (req, res) {
  ag.limpaAgendamentosPorId(req.body);
  res.send();
});

var porta = process.env.PORT || 8080;

app.listen(porta);

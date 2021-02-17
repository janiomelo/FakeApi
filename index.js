import AgendamentoController from './controllers/AgendamentoController';
import AtendimentoController from './controllers/AtendimentoController';
import BotController from './controllers/BotController';
import FilaAtendimentoController from './controllers/FilaAtendimentoController';
import MotivoController from './controllers/MotivoController';
import PessoaController from './controllers/PessoaController';
import express from 'express';

const app = express();
app.use(express.json());

app.get("/novos-agendamentos", AgendamentoController.novosAgendamentos);
app.post("/confirmar-agendamentos", AgendamentoController.confirmaAgendamentos);
app.get("/motivos", MotivoController.listaMotivos);
app.get("/grupos", MotivoController.listaGrupos);
app.get("/motivos/:id", MotivoController.getMotivo);
app.post("/novo-atendimento", AtendimentoController.novoAtendimento);
app.get("/meus-atendimentos", AtendimentoController.meusAtendimentos);
app.post("/limpar-atendimentos", AtendimentoController.limpaAtendimentos);
app.post("/inicia-atendimento", FilaAtendimentoController.iniciaAtendimento);
app.post("/encerra-atendimento", FilaAtendimentoController.encerraAtendimento);
app.post("/resolvido", BotController.incrementaResolvido);
app.post("/nao-resolvido", BotController.incrementaNaoResolvido);
app.get("/resultado", BotController.resultado);
app.put("/pessoa/:id", PessoaController.atualiza)

var porta = process.env.PORT || 8080;

app.listen(porta);


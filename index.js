import express from 'express';
import AgendamentoController from './controllers/AgendamentoController';
import MotivoController from './controllers/MotivoController';
import AtendimentoController from './controllers/AtendimentoController';

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

var porta = process.env.PORT || 8080;

app.listen(porta);
